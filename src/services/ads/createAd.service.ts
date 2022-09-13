import { Ad } from '../../entities/Ad/ad.entity';
import { AppError } from '../../errors';
import { AdCreation } from '../../interfaces/Ads/ad.interface';
import userRepository from '../../repositories/userRepository';
import adRepository from '../../repositories/adRepository';
import { Image } from '../../entities/Image/image.entity';
import imageRepository from '../../repositories/imageRepository';

export const createAdService = async (
	{
		advertisement_type,
		title,
		fabrication_year,
		mileage,
		price,
		description,
		vehicle_type,
		is_active,
	}: AdCreation,
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

			await adRepository.save(ad);

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
