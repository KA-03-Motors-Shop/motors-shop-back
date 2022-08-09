import { Router } from 'express';
import { VehicleController } from '../../controllers/Vehicles';

const vehicleRoutes = Router();

vehicleRoutes.post('/', VehicleController.store);

export default vehicleRoutes;
