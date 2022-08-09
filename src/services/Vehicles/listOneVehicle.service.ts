import { AppDataSource } from '../../data-source';
import { Vehicle } from '../../entities/Vehicles';

export const listOneVehicleService = async (id: string) => {
	const vehicleRepository = AppDataSource.getRepository(Vehicle);
	const vehicle = await vehicleRepository.findOneBy({ id: id });

	if (!vehicle) {
		throw new Error("Vehicle not found or doesn't exists");
	}
	return vehicle;
};
