module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','1bd5744306a4c0c7f9dbc8c07f170899'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '1bd5744306a4c0c7f9dbc8c07f170899'),
  },
});
