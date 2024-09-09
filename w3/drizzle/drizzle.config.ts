import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./schema/*",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'MysecretPassword',
    database: 'clases'
  }
});