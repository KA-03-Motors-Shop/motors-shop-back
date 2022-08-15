import { AppDataSource } from '../../data-source';
import { User } from '../../entities/User';
import { AppError } from '../../errors';

export const listOneUserService = async (id: string) => {
	const userRepository = AppDataSource.getRepository(User);
	const user = await userRepository.findOneBy({ id });

	if (!user) {
		throw new AppError(404, "User not found or doesn't exists");
	}

	return user;
};
