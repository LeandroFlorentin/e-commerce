import { ResponseDTO } from './response.dto';

export interface AuthDTO {
  email: string;
  password: string;
}

export interface AuthResponseDataDTO {
  access_token: string;
}

export type AuthResponseDTO = ResponseDTO<AuthResponseDataDTO>;
