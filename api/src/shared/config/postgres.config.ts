export default () => ({
  database: {
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string),
    user: process.env.DB_POSTGRES_USER as string,
    password: process.env.DB_POSTGRES_PASSWORD as string,
    name: process.env.DB_POSTGRES_DB as string,
  },
});
