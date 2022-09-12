import vehicleRepository from '../../repositories/vehicleRepository';

export const listVehicleService = async () => {
	const vehicles = await vehicleRepository.find();
	return vehicles;
};
