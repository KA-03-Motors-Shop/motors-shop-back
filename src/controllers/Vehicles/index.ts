import { Request, Response } from 'express';
import { createVehicleService } from '../../services/Vehicles/createVehicle.service';
import { listOneVehicleService } from '../../services/Vehicles/listOneVehicle.service';
import { listVehicleService } from '../../services/Vehicles/listVehicles.service';
import { listVehiclesByType } from '../../services/Vehicles/listVehiclesByType.service';

export class VehicleController {
	static async store(req: Request, res: Response) {
		const {
			advertisement_type,
			title,
			fabrication_year,
			mileage,
			price,
			description,
			vehicle_type,
			is_active,
			images,
		} = req.body;
		const token = req.headers.authorization;

		const vehicle = await createVehicleService(
			{
				advertisement_type,
				title,
				fabrication_year,
				mileage,
				price,
				description,
				vehicle_type,
				is_active,
			},
			token as string,
			images
		);

		return res.status(201).json(vehicle);
	}

	static async list(req: Request, res: Response) {
		const { type } = req.query;

		if (type) {
			const vehiclesByType = await listVehiclesByType(type as string);

			return res.status(200).json(vehiclesByType);
		}

		const vehicles = await listVehicleService();

		return res.status(200).json(vehicles);
	}

	static async listOne(req: Request, res: Response) {
		const { id } = req.params;
		const vehicle = await listOneVehicleService(id);

		return res.status(200).json(vehicle);
	}
}
