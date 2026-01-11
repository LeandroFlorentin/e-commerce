import { sign, verify } from 'jsonwebtoken';
import { TokenPayload, DecodedToken } from '../../domain/types/token.types';
import { JwtConfig } from '@/src/auth/config';

import { TokenRepositoryInterface } from '../../domain/repositories/token.repository.interface';

export class TokenRepository implements TokenRepositoryInterface {
  generateToken(payload: TokenPayload): string {
    return sign({ data: payload }, JwtConfig.jwt_secret, { expiresIn: JwtConfig.jwt_expires_in });
  }
  decodedToken(token: string): DecodedToken {
    return verify(token, JwtConfig.jwt_secret) as DecodedToken;
  }
}
