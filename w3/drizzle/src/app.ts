import {  migrate  } from 'drizzle-orm/node-postgres/migrator';
import { pgTable, serial, text, varchar, unique } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString: "postgres://postgres:MysecretPassword@localhost:5432/clases",
});
   

(async ()=>{
    await client.connect();
    const users = pgTable('users', {
        id: serial('id').primaryKey(),
        fullName: text('full_name'),
        phone: varchar('phone', { length: 256 }),
      });
    const db = await drizzle(client);    
    await migrate(db, { migrationsFolder: './drizzle' });

    await db.insert(users).values({fullName: "John", phone: "234234"})
    
    
})()