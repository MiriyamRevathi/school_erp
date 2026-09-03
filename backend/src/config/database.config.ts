import { registerAs } from "@nestjs/config";

const dbConfig = registerAs('db', () => ({
  type: 'in-memory',
  host: process.env.DATABASE_HOST || 'in-memory',
  port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
  username: process.env.DATABASE_USERNAME || 'local',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || 'school_erp_local',
}));

export type DbConfig = ReturnType<typeof dbConfig>;
export default dbConfig;
