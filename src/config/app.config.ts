/**
 * AppConfig
 * Converting all configs to a type-safe object and also giving it defaults
 * Also we can validate required configs before spinning-up the service.
 */

import { AppConfig } from 'src/interfaces/config.interface';

export default (): AppConfig => ({
  port: parseInt(process.env.PORT!, 10) || 4000,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT!, 10) || 5432,
    name: process.env.DB_NAME || 'trader',
    user: process.env.DB_USER || 'postgres',
    pass: process.env.DB_PASS || 'postgres',
    schema: process.env.DB_SCHEMA || 'public',
  },
  password_salt_rounds: parseInt(process.env.PASSWORD_SALT_ROUNDS!, 10) || 10,
  jwt_token: {
    secret: process.env.JWT_SECRET || '78eiweiwrye9t545ythgh94',
    expiresIn: process.env.JWT_EXPIRED_IN || '30m',
  },
});
