import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './router';
import { connectDb } from './config/db';
import { corsConfig } from './config/cors';

connectDb();

const app = express();

// Cors
app.use(cors(corsConfig))

// Leer datos de formularios
app.use(express.json());

app.use('/', router);

export default app;