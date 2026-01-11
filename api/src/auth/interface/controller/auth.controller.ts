import { Request, Response, NextFunction } from 'express';
import { AuthDTO, AuthResponseDataDTO } from '../dtos/auth.dto';
import { FormatResponse } from '@/src/shared/utils';
import { LoginUseCase } from '../../application/uses-cases/login';

export class AuthController {
  constructor(private readonly useCaseLogin: LoginUseCase) {
    this.useCaseLogin = useCaseLogin;
  }
  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const payload = req.body as AuthDTO;
      const access_token = await this.useCaseLogin.login(payload);
      const response = FormatResponse.success<AuthResponseDataDTO>({ access_token }, 'Login successful');
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}
