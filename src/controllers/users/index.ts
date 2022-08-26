import { Request, Response } from 'express';
import { createUserService } from '../../services/users/createUser.service';
import { listOneUserService } from '../../services/users/listOneUser.service';
import { listUserService } from '../../services/users/listUsers.service';
import { loginService } from '../../services/users/login.service';

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

	static async list(req: Request, res: Response) {
		const users = await listUserService();
		return res.status(200).json(users);
	}

	static async listOne(req: Request, res: Response) {
		const { id } = req.params;
		const user = await listOneUserService(id);
		return res.status(200).json(user);
	}

	static async login(req: Request, res: Response) {
		const { email, password } = req.body;

		const token = await loginService({ email, password });

		return res.status(200).json(token);
	}
}
