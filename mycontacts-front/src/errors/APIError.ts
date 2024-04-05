type ErrorResponse = { error: string };

export class APIError extends Error {
  constructor(public response: Response, public body: unknown) {
    super();

    this.name = "APIError";
    this.response = response;
    this.message =
      body && typeof body === "object" && "error" in body
        ? (body as ErrorResponse).error
        : `${response.status} - ${response.statusText}`;
  }
}
