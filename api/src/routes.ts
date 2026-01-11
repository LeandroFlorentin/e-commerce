import Router from 'express';
import authRouter from './auth/interface/routes/index';
import { swaggerSpec } from './shared/config';
import swaggerUi from 'swagger-ui-express';

const routerApp = Router();

routerApp.use('/auth', authRouter);
routerApp.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default routerApp;
