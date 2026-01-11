import { NextFunction, Request, Response } from 'express';
import { AppError, FormatResponse } from '@/src/shared/utils';

const isJwtError = (err: AppError) => ['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(err.name);

export const errorMiddleware = (err: AppError, _: Request, res: Response, __: NextFunction) => {
  const status = Number(err.statusCode) || 500;
  const message = err.message || 'Error interno de servidor.';

  if (isJwtError(err)) {
    const response = FormatResponse.error(err.message);
    res.status(401).json(response);
    return;
  }

  if ((err as any).name === 'AxiosError') {
    const axiosError = err as any;
    const status = axiosError.response?.status || 500;
    const errors = axiosError.response?.data || { errors: ['Error interno de servidor'] };
    const response = FormatResponse.error('Error with external service', errors.errors);
    res.status(status).json(response);
    return;
  }

  const response = FormatResponse.error(message, [message]);
  res.status(status).json(response);
  return;
};
