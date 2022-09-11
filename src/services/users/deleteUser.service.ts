import { AppError } from '../../errors';
import userRepository from '../../repositories/userRepository';

interface IDeleteUser {
	id: string;
	userEmail: string;
}

export default class deleteUserService {
	async execute({ id, userEmail }: IDeleteUser): Promise<boolean> {
		const findUser = await userRepository.findOne({
			where: { id: id, email: userEmail },
		});
		if (!findUser) {
			throw new AppError(404, 'User not found');
		}
		await userRepository.delete(findUser.id);

		return true;
	}
}
