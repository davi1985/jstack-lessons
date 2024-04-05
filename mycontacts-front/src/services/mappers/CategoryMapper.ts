export type CategoryDomain = {
  id: string;
  name: string;
};

class CategoryMapper {
  toDomain({ id, name }: CategoryDomain): CategoryDomain {
    return {
      id,
      name,
    };
  }
}

export default new CategoryMapper();
