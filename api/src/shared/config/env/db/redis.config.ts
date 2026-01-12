export default {
  host: process.env.RD_HOST as string,
  port: Number(process.env.RD_PORT as string) as number,
};
