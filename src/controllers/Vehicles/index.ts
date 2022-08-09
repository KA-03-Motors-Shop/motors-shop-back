import { Request, Response } from 'express';
import { createVehicleService } from '../../services/Vehicles/createVehicle.service';

export class VehicleController {
	static async store(req: Request, res: Response) {
		const { advertisement_type, title } = req.body;
		const vehicle = await createVehicleService({ advertisement_type, title });

		return res.status(201).json(vehicle);
	}
}
