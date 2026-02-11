import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core';

export const tours = sqliteTable('tours', {
   id: integer('id').primaryKey({ autoIncrement: true }),
   title: text('title').notNull(),
   oldPrice: integer('old_price'),
   price: integer('price').notNull(),
   date: integer('date', { mode: 'timestamp' }),
   rating: real('rating'),
   imageUrl: text('image_url'),
   createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
   updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});