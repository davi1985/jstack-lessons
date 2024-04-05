import { Schema, model, models } from 'mongoose';
import { ICategory } from '../../@types';

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const Category = () => model<ICategory>('Category', CategorySchema);

export default (models.Category ?? Category()) as ReturnType<typeof Category>;
