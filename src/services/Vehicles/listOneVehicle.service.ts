import { AppDataSource } from '../../data-source';
import { Vehicle } from '../../entities/Vehicles';
import { AppError } from '../../errors';

export const listOneVehicleService = async (id: string) => {
	const vehicleRepository = AppDataSource.getRepository(Vehicle);
	const vehicle = await vehicleRepository.findOneBy({ id: id });

	if (!vehicle) {
		throw new AppError(404, "Vehicle not found or doesn't exists");
	}
	return vehicle;
};
