import { DataSource } from 'typeorm';
import { User } from '../../../src/entities/User';
import { createUserService } from '../../../src/services/users/createUser.service';
import { listOneUserService } from '../../../src/services/users/listOneUser.service';
import { dbConnect, dbDestroy } from '../../helpers/dbHandler';

describe('List one user', () => {
	let connection: DataSource;

	beforeAll(async () => {
		const db = await dbConnect();

		if (db) connection = db;
	});

	afterAll(async () => {
		await dbDestroy(connection);
	});

	test('Should list an user', async () => {
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

		const listAnUserById = await listOneUserService(newUser.id);

		console.log(listAnUserById);

		expect(listAnUserById).toBeFalsy();
		expect(listAnUserById).toBeInstanceOf(User);
	});
});
