import { Router } from 'express';
import { VehicleController } from '../../controllers/Vehicles';
import { validatedTokenMiddleware } from '../../middlewares/validatedToken.middleware';

const vehicleRoutes = Router();

vehicleRoutes.get('/', VehicleController.list);
vehicleRoutes.get('/:id', VehicleController.listOne);
vehicleRoutes.post('/', validatedTokenMiddleware, VehicleController.store);

export default vehicleRoutes;
