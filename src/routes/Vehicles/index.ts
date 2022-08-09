import { Router } from 'express';
import { VehicleController } from '../../controllers/Vehicles';

const vehicleRoutes = Router();

vehicleRoutes.get('/', VehicleController.list);
vehicleRoutes.get('/:id', VehicleController.listOne);
vehicleRoutes.post('/', VehicleController.store);

export default vehicleRoutes;
