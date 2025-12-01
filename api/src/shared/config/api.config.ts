export default () => ({
  api: {
    port: parseInt(process.env.API_PORT as string),
    url_users: process.env.API_URL_USERS as string,
  },
});
