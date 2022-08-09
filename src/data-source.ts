import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	ssl: false,
	logging: true,
	entities: ['src/entities/*/*.ts'],
	migrations: ['src/migrations/*.ts'],
});

AppDataSource.initialize()
	.then(() => {
		console.log('Data source initialized');
	})
	.catch((err) => {
		console.log('Error during the Data Source initialization', err);
	});
