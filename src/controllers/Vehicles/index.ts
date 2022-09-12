import { Request, Response } from 'express';
import { createVehicleService } from '../../services/ads/createAd.service';
import { listOneVehicleService } from '../../services/ads/listOneAd.service';
import { listVehicleService } from '../../services/ads/listAds.service';
import { listVehiclesByType } from '../../services/ads/listAdsByType.service';

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
		const userEmail = req.userEmail;

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
			userEmail as string,
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
