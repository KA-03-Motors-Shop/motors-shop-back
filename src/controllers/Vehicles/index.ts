import { Request, Response } from 'express';
import { createAdService } from '../../services/ads/createAd.service';
import { listOneAdService } from '../../services/ads/listOneAd.service';
import { listAdService } from '../../services/ads/listAds.service';
import { listAdsByType } from '../../services/ads/listAdsByType.service';

export class AdController {
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

		const vehicle = await createAdService(
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
			const vehiclesByType = await listAdsByType(type as string);

			return res.status(200).json(vehiclesByType);
		}

		const vehicles = await listAdService();

		return res.status(200).json(vehicles);
	}

	static async listOne(req: Request, res: Response) {
		const { id } = req.params;
		const vehicle = await listOneAdService(id);

		return res.status(200).json(vehicle);
	}
}
