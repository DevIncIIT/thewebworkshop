import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
	username: text('username').notNull().unique()
});

export const message = sqliteTable('message', {
	id: integer('id').primaryKey(),
	content: text('content').notNull(),
	userId: integer('userId').references(() => user.id)
});