import { Express } from 'express';
import userRoutes from './users';
import vehicleRoutes from './Vehicles';

export const useRoutes = (app: Express) => {
	app.use('/vehicles', vehicleRoutes);
	app.use('/users', userRoutes);
};
