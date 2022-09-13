import { User } from '../../entities/User/user.entity';
import { AppError } from '../../errors';
import { IUserUpdate } from '../../interfaces/User/user.interface';
import userRepository from '../../repositories/userRepository';
import * as bcrypt from 'bcrypt';

export default class PatchUserService {
	async execute({
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
	}: IUserUpdate): Promise<User> {
		const foundUser = await userRepository.findOne({
			where: { id: id, email: userEmail },
		});

		const checkEmail = await userRepository.findOne({
			where: { email: email },
		});

		if (!foundUser) throw new AppError(404, 'User not found');

		if (email) {
			if (checkEmail) {
				throw new AppError(400, 'Invalid email, please try a diferent one');
			}
			email ? (foundUser.email = email) : foundUser.email;
		}

		if (password) {
			const equalPasswords = bcrypt.compareSync(password, foundUser.password);

			if (equalPasswords) {
				throw new AppError(
					400,
					'Please provide a different password than the current one'
				);
			}

			foundUser.password = bcrypt.hashSync(password, 10);
		}

		if (name) {
			foundUser.name = name;
		}
		if (cpf) {
			foundUser.cpf = cpf;
		}
		if (phone) {
			foundUser.phone = phone;
		}
		if (birthDate) {
			const newBirthDate = new Date(birthDate);
			foundUser.birthDate = newBirthDate;
		}
		if (description) {
			foundUser.description = description;
		}
		if (account_type) {
			foundUser.account_type = account_type;
		}

		foundUser.updatedAt = new Date();

		await userRepository.save(foundUser);

		return foundUser;
	}
}
