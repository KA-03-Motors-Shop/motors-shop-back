import { DataSource } from 'typeorm';
import { listUserService } from '../../../src/services/users/listUsers.service';
import { dbConnect, dbDestroy } from '../../helpers/dbHandler';

describe('List all users', () => {
	let connection: DataSource;

	beforeAll(async () => {
		const db = await dbConnect();

		if (db) connection = db;
	});

	afterAll(async () => {
		await dbDestroy(connection);
	});

	test('Should list all registered users', async () => {
		const userList = await listUserService();

		expect(userList).toHaveProperty('map');
	});
});
