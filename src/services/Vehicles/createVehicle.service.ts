import { AppDataSource } from '../../data-source';
import { User } from '../../entities/User';
import { Vehicle } from '../../entities/Vehicles';
import { AppError } from '../../errors';
import * as jwt from 'jsonwebtoken';
import { VehicleCreation } from '../../interfaces/Vehicle/vehicle.interface';

export const createVehicleService = async (
	{
		advertisement_type,
		title,
		fabrication_year,
		mileage,
		price,
		description,
		vehicle_type,
		is_active,
		images,
	}: VehicleCreation,
	token: string
) => {
	const vehicleRepository = AppDataSource.getRepository(Vehicle);
	const userRepository = AppDataSource.getRepository(User);

	const tokenDecode = jwt.decode(token);

	const user = await userRepository.findOneBy({ id: tokenDecode?.id });

	if (user) {
		try {
			const vehicle = new Vehicle(
				advertisement_type,
				title,
				fabrication_year,
				mileage,
				price,
				description,
				vehicle_type,
				is_active,
				user,
				images
			);

			await vehicleRepository.save(vehicle);

			return vehicle;
		} catch (err) {
			if (err instanceof AppError) {
				throw new AppError(400, 'vehicle service error');
			}
		}
	}
};
