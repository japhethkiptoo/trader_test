export type DatabaseConfig = {
  host: string;
  port: number;
  name: string;
  user: string;
  pass: string;
  schema: string;
};

export type AppConfig = {
  port: number;
  database: DatabaseConfig;
  password_salt_rounds: number;
};
