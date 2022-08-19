import { DataSource } from 'typeorm';
import { AppDataSource } from '../../src/data-source';

export const dbConnect = async () => {
	try {
		const connection = await AppDataSource.initialize();
		return connection;
	} catch (error) {
		console.error('Databse Error', error);
	}
};

export const dbDestroy = async (connection: DataSource) => {
	if (connection) {
		await connection.dropDatabase();
		await connection.destroy();
	}
};
