module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','vNLciRcAazxRsNX7nJ4uMg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'yQZIKZbMyesjpam6oQ91/w=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','px0zoMozlxTb7bTgTo8XCg=='),
    },
  },
});
