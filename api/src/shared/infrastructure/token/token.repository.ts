import { sign, verify } from 'jsonwebtoken';
import { TokenPayload, DecodedToken } from '../../domain/types/token.types';
import jwtConfig from '../../config/jwt.config';

import { TokenRepositoryInterface } from '../../domain/repositories/token.repository.interface';

export class TokenRepository implements TokenRepositoryInterface {
  generateToken(payload: TokenPayload): string {
    return sign({ data: payload }, jwtConfig.jwt_secret, { expiresIn: jwtConfig.jwt_expires_in });
  }
  decodedToken(token: string): DecodedToken {
    return verify(token, jwtConfig.jwt_secret) as DecodedToken;
  }
}
