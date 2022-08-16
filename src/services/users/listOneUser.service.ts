import { AppError } from '../../errors';
import userRepository from '../../repositories/userRepository';

export const listOneUserService = async (id: string) => {
	const user = await userRepository.findOneBy({ id });

	if (!user) {
		throw new AppError(404, "User not found or doesn't exists");
	}

	return user;
};
