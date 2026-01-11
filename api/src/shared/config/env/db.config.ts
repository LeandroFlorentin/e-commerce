export default {
  host: process.env.DB_HOST as string,
  port: parseInt(process.env.DB_PORT as string),
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  db_name: process.env.DB_NAME as string,
  type: process.env.DB_TYPE as 'postgres',
};
