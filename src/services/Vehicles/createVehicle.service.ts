import { AppDataSource } from '../../data-source';
import { Vehicle } from '../../entities/Vehicles';
import { VehicleCreation } from '../../interfaces/Vehicle/vehicle.interface';

export const createVehicleService = async ({
	advertisement_type,
	title,
}: VehicleCreation) => {
	const vehicleRepository = AppDataSource.getRepository(Vehicle);
    
	try {
        const vehicle = new Vehicle(advertisement_type, title);
        console.log("service", vehicle);

        await vehicleRepository.save(vehicle)
	} catch (err) {
        if (err instanceof Error) {
            throw new Error("vehicle service error")
        }
    }
};
