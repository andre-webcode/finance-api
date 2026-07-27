import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { mainRouter } from './routes/main.js';

const server = express();

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use(mainRouter);


server.listen(3000, () => {
    console.log('Servidor rodando.....')
})