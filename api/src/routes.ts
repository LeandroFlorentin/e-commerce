import Router from 'express';
import authRouter from './auth/interface/routes/index';

const routerApp = Router();

routerApp.use('/auth', authRouter);

export default routerApp;
