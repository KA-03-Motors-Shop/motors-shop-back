import { Router } from 'express';
import { UsersController } from '../../controllers/users';

const userRoutes = Router();

userRoutes.post('/register', UsersController.store);
userRoutes.get('/', UsersController.list);
userRoutes.get('/:id', UsersController.listOne);
userRoutes.post('/login', UsersController.login);

export default userRoutes;
