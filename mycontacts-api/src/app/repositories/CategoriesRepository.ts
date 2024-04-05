import { query } from '../../database';

interface CategoryDTO {
  id?: string;
  name: string;
}

export class CategoriesRepository {
  async findAll(): Promise<CategoryDTO[]> {
    const rows = await query('SELECT * FROM categories ORDER BY name');

    return rows;
  }

  async findById(id: string): Promise<CategoryDTO> {
    const [row] = await query('SELECT * FROM categories WHERE id = $1', [id]);

    return row;
  }

  async create({ name }: CategoryDTO): Promise<CategoryDTO> {
    const [row] = await query(
      `INSERT INTO categories (name) VALUES($1) RETURNING *`,
      [name],
    );

    return row;
  }

  async update({ id, name }: CategoryDTO): Promise<CategoryDTO> {
    const [row] = await query(
      `UPDATE categories SET name = $1 WHERE id = $2 RETURNING *`,
      [name, id],
    );

    return row;
  }

  async delete(id: string) {
    await query(`DELETE FROM categories WHERE id = $1`, [id]);
  }
}
