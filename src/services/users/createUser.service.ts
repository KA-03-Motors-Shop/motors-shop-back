import { AppDataSource } from '../../data-source';
import { User } from '../../entities/User';
import { AppError } from '../../errors';
import { UserCreation } from '../../interfaces/User/user.interface';

export const createUserService = async ({
	name,
	email,
	password,
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
}: UserCreation) => {
	const userRepository = AppDataSource.getRepository(User);

	const userAlreadyExists = await userRepository.findOneBy({ email });

	if (userAlreadyExists) {
		throw new AppError(400, 'This email already exists');
	}

	const user = new User(
		name,
		email,
		cpf,
		phone,
		birthDate,
		description,
		cep,
		state,
		city,
		street,
		address_number,
		complement,
		account_type,
		password
	);

	let now = new Date();

	user.createdAt = now;
	user.updatedAt = now;

	await userRepository.save(user);

	return user;
};
