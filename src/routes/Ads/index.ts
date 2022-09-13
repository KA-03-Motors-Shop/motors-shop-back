import { Router } from 'express';
import { AdController } from '../../controllers/Vehicles';
import { authUserMiddleware } from '../../middlewares/authUser.middleware';

const vehicleRoutes = Router();

vehicleRoutes.get('/', AdController.list);
vehicleRoutes.get('/:id', AdController.listOne);
vehicleRoutes.post('/', authUserMiddleware, AdController.store);

export default vehicleRoutes;
