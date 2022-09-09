import { IUserUpdate } from '../../interfaces/User/user.interface';
import userRepository from '../../repositories/userRepository';

export const updateUserService = async ({
    id,
	name,
	email,
	password,
	cpf,
	phone,
	birthDate,
	description,
	account_type,
}: IUserUpdate) => {
    const userExists = await userRepository.findOneBy({id:id})
};
