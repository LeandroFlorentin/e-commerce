import { TokenPayload, DecodedToken } from '../types/token.types';

export interface TokenRepositoryInterface {
  generateToken(payload: TokenPayload): string;
  decodedToken(token: string): DecodedToken;
}
