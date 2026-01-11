import { TokenRepository } from '@/src/shared/infrastructure/token/token.repository';
import { EncryptRepository } from '@/src/shared/infrastructure/encrypt/encrypt.repository';
import { LoginUseCase } from '../../application/uses-cases/login';
import { AuthController } from '../controller/auth.controller';

export const createAuthController = () => {
  const tokenRepository = new TokenRepository();
  const encryptRepository = new EncryptRepository();
  const useCaseLogin = new LoginUseCase(tokenRepository, encryptRepository);
  return new AuthController(useCaseLogin);
};
