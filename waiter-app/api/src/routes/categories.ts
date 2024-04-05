import { Router } from 'express';
import { ListCategoriesUserCase } from '../app/use-cases/categories/list-categories';
import { CreateCategoryUseCase } from '../app/use-cases/categories/create-category';

const router = Router();

router.get('/', new ListCategoriesUserCase().list);
router.post('/', new CreateCategoryUseCase().create);

export { router as categoriesRoutes };
