import vehicleRepository from '../../repositories/vehicleRepository';

export const listVehiclesByType = async (type: string) => {
	const vehiclesByType = await vehicleRepository.find({
		where: { vehicle_type: type },
	});

	return vehiclesByType;
};
