module.exports = ({ env }) => ({
    host: env('HOST', '192.168.1.50'),
    port: env.int('PORT', 1337),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', 'ccd02bc9e5a7accd0e610eb0e468cc18'),
      },
    },
  });
  