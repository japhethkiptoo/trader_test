/**
 * AppConfig
 * Converting all configs to a type-safe object and also giving it defaults
 * Also we can validate required configs before spinning-up the service.
 */

export default () => ({
  port: parseInt(process.env.PORT!, 10) || 4000,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
});
