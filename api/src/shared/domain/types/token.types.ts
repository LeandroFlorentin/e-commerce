export interface TokenPayload {
  id: number;
  email: string;
  username: string;
  role: string[];
}

export interface DecodedToken extends TokenPayload {
  iat: number;
  exp: number;
}
