import { AppDataSource } from '../../data-source';
import { Vehicle } from '../../entities/Vehicles';

export const listVehicleService = async () => {
	const vehicleRepository = AppDataSource.getRepository(Vehicle);
	const vehicles = await vehicleRepository.find();
	return vehicles;
};
