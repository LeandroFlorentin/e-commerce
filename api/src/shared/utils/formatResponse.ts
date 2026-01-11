import { ResponseDTO } from '@/src/auth/interface/dtos/response.dto';

export default class FormatResponse {
  static success<T>(data: T, message: string = 'Success'): ResponseDTO<T> {
    return {
      ok: true,
      data,
      message,
      errors: null,
    };
  }

  static error(message: string, errors: string[] = []): ResponseDTO<null> {
    return {
      ok: false,
      data: null,
      message,
      errors,
    };
  }
}
