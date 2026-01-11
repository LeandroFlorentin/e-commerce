import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routerApp from './routes';
import { errorMiddleware } from './shared/interface/middlewares';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', routerApp);

app.use(errorMiddleware);

export default app;
