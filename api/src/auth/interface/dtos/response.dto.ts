export interface ResponseDTO<T> {
  ok: boolean;
  data: T | null;
  message?: string;
  errors: string[] | null;
}
