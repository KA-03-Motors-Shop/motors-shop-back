import { AppError } from '../../errors';
import { userLogin } from '../../interfaces/User/user.interface';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import userRepository from '../../repositories/userRepository';

export const loginService = async ({ email, password }: userLogin) => {
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
			id: found.id,
		},
		process.env.TOKEN_KEY as string,
		{ expiresIn: '24h' }
	);
	console.log(token);

	return { AcessToken: token };
};
