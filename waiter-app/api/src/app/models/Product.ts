import { model, models, Schema } from 'mongoose';
import { IProduct } from '../../@types';

export const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    required: true,
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
      },
    ],
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
});

const Product = () => model('Product', ProductSchema);

export default (models.Product ?? Product()) as ReturnType<typeof Product>;
