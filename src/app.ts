import express from 'express';
import 'express-async-errors';
import { handleErrors } from './errors';
import { useRoutes } from './routes';
import swaggerUI from 'swagger-ui-express';

import swaggerDocs from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

useRoutes(app);
console.log("teste");


app.get('/', (req, res) => {
	res.json({
		status: 200,
		message: 'Bem-vindo!',
	});
});

app.use(handleErrors);

export { app };
