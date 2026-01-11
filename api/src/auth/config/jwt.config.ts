export default {
  jwt_secret: process.env.JWT_SECRET as string,
  jwt_expires_in: Number(process.env.JWT_EXPIRES_IN) as number,
};
