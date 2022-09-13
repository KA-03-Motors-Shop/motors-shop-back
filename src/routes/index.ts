import { Express } from 'express';
import userRoutes from './users';
import vehicleRoutes from './Ads';

export const useRoutes = (app: Express) => {
	app.use('/vehicles', vehicleRoutes);
	app.use('/users', userRoutes);
};
