import { Ad } from '../../entities/Ad/ad.entity';
import { AppError } from '../../errors';
import { VehicleCreation } from '../../interfaces/Vehicle/vehicle.interface';
import userRepository from '../../repositories/userRepository';
import vehicleRepository from '../../repositories/vehicleRepository';
import { Image } from '../../entities/Image/image.entity';
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
			const ad = new Ad(
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

			await vehicleRepository.save(ad);

			images.forEach(async (img) => {
				let newImage = new Image(img, ad);
				await imageRepository.save(newImage);
			});

			return { ad: ad, images: images };
		} catch (err) {
			if (err instanceof AppError) {
				throw new AppError(400, 'vehicle service error');
			}
		}
	}
};
