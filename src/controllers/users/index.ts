import { Request, Response } from 'express';
import { request } from 'http';
import { createUserService } from '../../services/users/createUser.service';
import deleteUserService from '../../services/users/deleteUser.service';
import { listOneUserService } from '../../services/users/listOneUser.service';
import { listUserService } from '../../services/users/listUsers.service';
import { loginService } from '../../services/users/login.service';
import PatchUserService from '../../services/users/updateUser.service';

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
			color,
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
			color,
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

	static async patch(req: Request, res: Response) {
		const {
			name,
			email,
			password,
			cpf,
			phone,
			birthDate,
			description,
			account_type,
		} = req.body;
		const { id } = req.params;

		const userEmail = req.userEmail as string;

		const patchUser = new PatchUserService();

		const patchedUser = await patchUser.execute({
			id,
			userEmail,
			name,
			email,
			password,
			cpf,
			phone,
			birthDate,
			description,
			account_type,
		});

		return res.status(200).json(patchedUser);
	}

	static async delete(req: Request, res: Response) {
		const { id } = req.params;
		const userEmail = req.userEmail as string;

		const deleteUser = new deleteUserService()

		await deleteUser.execute({id, userEmail})

		return res.status(200).json()
	}
}
