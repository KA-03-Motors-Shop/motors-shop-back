import { User } from '../../entities/User';
import { AppError } from '../../errors';
import { IUserCreation } from '../../interfaces/User/user.interface';
import bcrypt from 'bcrypt';
import userRepository from '../../repositories/userRepository';

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
	color,
}: IUserCreation) => {
	const userAlreadyExists = await userRepository.findOneBy({ email });

	if (userAlreadyExists) {
		throw new AppError(400, 'This email already exists');
	}

	const hashPass = bcrypt.hashSync(password, 10);

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
		(password = hashPass),
		color
	);

	let now = new Date();

	user.createdAt = now;
	user.updatedAt = now;

	userRepository.create(user);

	await userRepository.save(user);

	return user;
};
