import { DataSource } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/User/user.entity';
import { AppError } from '../../errors';
import { createUserService } from './createUser.service';

describe('Testing user creation', () => {
	let connection: DataSource;

	beforeAll(async () => {
		await AppDataSource.initialize()
			.then((res) => (connection = res))
			.catch((err) => {
				console.error('Error during Data Source initialization', err);
			});
	});

	afterAll(async () => {
		await connection.destroy();
	});

	const name = 'Rafael';
	const email = 'email@email.com';
	const cpf = '12345678912';
	const phone = '12345678912';
	const birthDate = new Date('01/01/2000');
	const description = '';
	const cep = '12345678';
	const state = 'SP';
	const city = 'São Paulo';
	const street = 'Rua da Paz';
	const address_number = '1';
	const complement = '';
	const account_type = 'Seller';
	const password = '1234';
	const color = 'var(--randon4)';
	const userData = {
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
	};
	test('should be able to create a user', async () => {
		const newUser = await createUserService(userData);

		expect(newUser).toBeInstanceOf(User);
	});

	test('Should not create a user with an email that is already registered', async () => {
		return expect(createUserService(userData)).rejects.toThrow();
	});
});
