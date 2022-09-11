import { Router } from 'express';
import { UsersController } from '../../controllers/users';
import { authUserMiddleware } from '../../middlewares/authUser.middleware';

const userRoutes = Router();

userRoutes.post('/register', UsersController.store);
userRoutes.get('/', UsersController.list);
userRoutes.get('/:id', UsersController.listOne);
userRoutes.patch('/:id', authUserMiddleware, UsersController.patch);
userRoutes.delete('/:id', authUserMiddleware, UsersController.delete);
userRoutes.post('/login', UsersController.login);

export default userRoutes;
