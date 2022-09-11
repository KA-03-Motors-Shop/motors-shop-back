import { AppError } from '../../errors';
import { IUserLogin } from '../../interfaces/User/user.interface';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import userRepository from '../../repositories/userRepository';

export const loginService = async ({ email, password }: IUserLogin) => {
	const found = await userRepository.findOneBy({ email });

	if (!found) {
		throw new AppError(400, 'Email or password incorrect');
	}

	if (!bcrypt.compareSync(password, found.password)) {
		throw new AppError(400, 'Email or password incorrect');
	}

	const token = jwt.sign(
		{
			userEmail: found.email,
		},
		process.env.TOKEN_KEY as string,
		{ expiresIn: '24h' }
	);

	return { AcessToken: token };
};
