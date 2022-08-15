import { AppDataSource } from '../../data-source';
import { User } from '../../entities/User';
import { AppError } from '../../errors';
import { userLogin } from '../../interfaces/User/user.interface';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

export const loginService = async ({ email, password }: userLogin) => {
	const userRepository = AppDataSource.getRepository(User);

	const found = await userRepository.findOneBy({ email });

	if (!found) {
		throw new AppError(400, 'Email or password incorrect');
	}

	const verifyPassword = bcrypt.compareSync(password, found.password);

	if (!verifyPassword) {
		throw new AppError(400, 'Email or password incorrect');
	}

	const token = jwt.sign(
		{
			email: found.email,
			id: found.id,
		},
		process.env.TOKEN_KEY as string,
		{ expiresIn: '24h' }
	);
	console.log(token);

	return { AcessToken: token };
};
