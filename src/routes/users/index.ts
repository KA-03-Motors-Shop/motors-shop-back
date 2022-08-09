import { Router } from 'express';
import { UsersController } from '../../controllers/users';

const userRoutes = Router();

userRoutes.post('/register', UsersController.store);

export default userRoutes;
