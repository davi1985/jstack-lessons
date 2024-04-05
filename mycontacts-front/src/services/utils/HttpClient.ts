import { APIError } from "../../errors/APIError";
import { delay } from "../../utils/delay";

type PostOptions = {
  body?: BodyInit;
  headers?: HeadersInit;
};

export class HttpClient {
  constructor(private baseUrl: string) {}

  get<T>(path: string, headers?: HeadersInit): Promise<T> {
    return this.makeRequest<T>(path, { headers });
  }

  post<T>(path: string, options: PostOptions): Promise<T> {
    return this.makeRequest<T>(path, {
      method: "POST",
      body: options?.body,
      headers: options?.headers,
    });
  }

  put<T>(path: string, options: PostOptions): Promise<T> {
    return this.makeRequest<T>(path, {
      method: "PUT",
      body: options?.body,
      headers: options?.headers,
    });
  }

  delete(path: string, options?: PostOptions) {
    return this.makeRequest(path, {
      method: "DELETE",
      headers: options?.headers,
    });
  }

  private async makeRequest<T>(path: string, options?: RequestInit) {
    await delay(500);

    const headers = new Headers();

    if (options?.body) {
      headers.append("Content-Type", "application/json");
    }

    if (options?.headers) {
      for (const [key, value] of Object.entries(options.headers)) {
        headers.append(key, value);
      }
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options?.method,
      body: JSON.stringify(options?.body),
      headers,
    });

    let responseBody: T | null = null;
    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType?.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody as T;
    }

    throw new APIError(response, responseBody!);
  }
}
