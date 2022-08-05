import express from 'express';


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		status: 200,
		message: 'Bem-vindo!',
	});
});

export { app };
