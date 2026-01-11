import app from './src/app';
import { ApiConfig } from './src/shared/config/index';
import 'reflect-metadata';

const PORT = ApiConfig.port || 3000;

function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
