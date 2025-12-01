import app from './src/app';
import { ApiConfig } from './src/shared/config/index';

const PORT = ApiConfig.port || 3000;

function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
