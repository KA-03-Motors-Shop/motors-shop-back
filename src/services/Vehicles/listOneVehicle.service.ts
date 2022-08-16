import { AppError } from '../../errors';
import vehicleRepository from "../../repositories/vehicleRepository";

export const listOneVehicleService = async (id: string) => {
	const vehicle = await vehicleRepository.findOneBy({ id: id });

	if (!vehicle) {
		throw new AppError(404, "Vehicle not found or doesn't exists");
	}
	return vehicle;
};
