import { Request, Response } from 'express';
import { createUserService } from '../../services/users/createUser.service';

export class UsersController {
	static async store(req: Request, res: Response) {
		const {
			name,
			email,
			cpf,
			phone,
			birthDate,
			description,
			account_type,
			cep,
			state,
			city,
			street,
			address_number,
			complement,
			password,
		} = req.body;

		const user = await createUserService({
			name,
			email,
			cpf,
			phone,
			birthDate,
			description,
			account_type,
			cep,
			state,
			city,
			street,
			address_number,
			complement,
			password,
		});

		return res.status(201).json(user);
	}
}
