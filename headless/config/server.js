module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ccd02bc9e5a7accd0e610eb0e468cc18'),
    },
    cron:{
      enabled: true,
    },
  },
});
