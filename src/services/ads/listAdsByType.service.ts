import adRepository from '../../repositories/adRepository';

export const listAdsByType = async (type: string) => {
	const adsByType = await adRepository.find({
		where: { vehicle_type: type },
	});

	return adsByType;
};
