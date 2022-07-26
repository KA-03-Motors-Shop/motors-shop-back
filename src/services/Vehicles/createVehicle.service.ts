import { Vehicle } from '../../entities/Vehicles';
import { AppError } from '../../errors';
import { VehicleCreation } from '../../interfaces/Vehicle/vehicle.interface';
import userRepository from '../../repositories/userRepository';
import vehicleRepository from '../../repositories/vehicleRepository';
import { Image } from '../../entities/Images';
import imageRepository from '../../repositories/imageRepository';

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
	}: VehicleCreation,
	userEmail: string,
	images: string[]
) => {
	const user = await userRepository.findOneBy({ email: userEmail });

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
				user
			);

			await vehicleRepository.save(vehicle);

			images.forEach(async (img) => {
				let newImage = new Image(img, vehicle);
				await imageRepository.save(newImage);
			});

			return { vehicle: vehicle, images: images };
		} catch (err) {
			if (err instanceof AppError) {
				throw new AppError(400, 'vehicle service error');
			}
		}
	}
};
