import { DataSource } from 'typeorm';
import { AppDataSource } from '../../data-source';

export const dbConnect = async () => {
	try {
		const connection = await AppDataSource.initialize();
		return connection;
	} catch (error) {
		console.error('Database error', error);
	}
};

export const dbDestroy = async (connection: DataSource) => {
	if (connection) {
		await connection.dropDatabase();
		await connection.destroy();
	}
};
