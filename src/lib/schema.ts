import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const formSubmissions = sqliteTable('form_submissions', {
   id: integer('id').primaryKey({ autoIncrement: true }),
   name: text('name').notNull(),
   email: text('email').notNull(),
   message: text('message'),
   createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});