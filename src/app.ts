import express from 'express';
import 'express-async-errors';
import { handleErrors } from './errors';
import { useRoutes } from './routes';
import swaggerUI from 'swagger-ui-express';

import swaggerDocs from './swagger.json';

import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

useRoutes(app);

app.get('/', (req, res) => {
	res.json({
		status: 200,
		message: 'Bem-vindo!',
	});
});

app.use(handleErrors);

export { app };
