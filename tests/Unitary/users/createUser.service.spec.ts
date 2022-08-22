import { createUserService } from '../../../src/services/users/createUser.service';
import { dbConnect, dbDestroy } from '../../helpers/dbHandler';
import { DataSource } from 'typeorm';

describe('Create an user', () => {
	let connection: DataSource;

	beforeAll(async () => {
		const db = await dbConnect();

		if (db) connection = db;
	});

	afterAll(async () => {
		await dbDestroy(connection);
	});

	test('Should insert the information of the new user in the database', async () => {
		const name = 'Rafael';
		const email = 'rafael@email.com';
		const cpf = '12345678910';
		const phone = '99999999999';
		const birthDate = new Date('01/01/2000');
		const description = 'Lorem Ipsum';
		const cep = '5700000';
		const state = 'Alagoas';
		const city = 'Maceió';
		const street = 'Rua da paz';
		const address_number = '01';
		const complement = 'Lorem ipsum';
		const account_type = 'seller';
		const password = 'strongPassword';

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
		};

		const newUser = await createUserService(userData);

		expect(newUser.name).toBe(userData.name);
		expect(newUser.email).toBe(userData.email);
		expect(newUser.cpf).toBe(userData.cpf);
		expect(newUser.phone).toBe(userData.phone);
		expect(newUser.birthDate).toEqual(userData.birthDate);
		expect(newUser.description).toBe(userData.description);
		expect(newUser.account_type).toBe(userData.account_type);
		expect(newUser.cep).toBe(userData.cep);
		expect(newUser.state).toBe(userData.state);
		expect(newUser.city).toBe(userData.city);
		expect(newUser.street).toBe(userData.street);
		expect(newUser.address_number).toBe(userData.address_number);
		expect(newUser.complement).toBe(userData.complement);
	});
});
