import { Types } from 'mongoose';

export interface ICategory {
  name: string;
  icon: string;
}

export interface IIngredient {
  name: string;
  icon: string;
}

export interface IProduct {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: IIngredient[];
  category: Types.ObjectId | ICategory;
}
