import { app } from './app';

const port = 3030;
const host = "localhost"

app.listen(port, host);
console.log(`Servidor rodando em http://${host}:${port}`);


