import express from 'express';
import { useRoutes } from './routes';

const app = express();

app.use(express.json());

useRoutes(app);

app.get('/', (req, res) => {
	res.json({
		status: 200,
		message: 'Bem-vindo!',
	});
});

export { app };
