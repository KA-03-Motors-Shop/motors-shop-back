import { Router } from 'express';
import { VehicleController } from '../../controllers/Vehicles';
import { authUserMiddleware } from '../../middlewares/authUser.middleware';

const vehicleRoutes = Router();

vehicleRoutes.get('/', VehicleController.list);
vehicleRoutes.get('/:id', VehicleController.listOne);
vehicleRoutes.post('/', authUserMiddleware, VehicleController.store);

export default vehicleRoutes;
