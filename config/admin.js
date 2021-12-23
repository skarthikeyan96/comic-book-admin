module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a9ff6fe1d310689ebe20a931ee9586af'),
  },
});
