import { Request, Response, NextFunction } from 'express';
import { LoginUseCase } from '../../application/uses-cases/login';
import { AuthDTO, AuthResponseDataDTO } from '../dtos/auth.dto';
import { FormatResponse } from '@/src/shared/utils';

export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {
    this.loginUseCase = loginUseCase;
  }
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const payload = req.body as AuthDTO;
      const access_token = await this.loginUseCase.login(payload);
      const response = FormatResponse.success<AuthResponseDataDTO>({ access_token }, 'Login successful');
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
