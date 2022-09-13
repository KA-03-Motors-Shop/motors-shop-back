import { AppError } from '../../errors';
import adRepository from '../../repositories/adRepository';

export const listOneAdService = async (id: string) => {
	const ad = await adRepository.findOneBy({ id: id });

	if (!ad) {
		throw new AppError(404, "Advertisement not found or doesn't exists");
	}
	return ad;
};
