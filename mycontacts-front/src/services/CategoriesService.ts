import CategoryMapper from "./mappers/CategoryMapper";
import { HttpClient } from "./utils/HttpClient";

type Category = { id: string; name: string };

class CategoriesService {
  private readonly httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(import.meta.env.VITE_API_BASE_URL);
  }

  async listCategories(): Promise<Category[]> {
    const categories = await this.httpClient.get<Category[]>("/categories");

    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
