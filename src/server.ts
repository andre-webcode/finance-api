import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { mainRouter } from './routes/main.js';

const server = express();

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use(mainRouter);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Servidor rodando em ${PORT}`);
});;