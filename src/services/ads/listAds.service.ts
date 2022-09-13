import adRepository from '../../repositories/adRepository';

export const listAdService = async () => {
	const ads = await adRepository.find();
	return ads;
};
