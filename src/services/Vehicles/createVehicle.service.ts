import { AppDataSource } from '../../data-source';
import { Vehicle } from '../../entities/Vehicles';
import { VehicleCreation } from '../../interfaces/Vehicle/vehicle.interface';

export const createVehicleService = async ({
	advertisement_type,
	title,
	fabrication_year,
	mileage,
	price,
	description,
	vehicle_type,
	is_active,
}: VehicleCreation) => {
	const vehicleRepository = AppDataSource.getRepository(Vehicle);

	try {
		const vehicle = new Vehicle(
			advertisement_type,
			title,
			fabrication_year,
			mileage,
			price,
			description,
			vehicle_type,
			is_active
		);
		console.log('service', vehicle);

		await vehicleRepository.save(vehicle);

		return vehicle;
	} catch (err) {
		if (err instanceof Error) {
			throw new Error('vehicle service error');
		}
	}
};
