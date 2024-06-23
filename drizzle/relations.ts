import { relations } from "drizzle-orm/relations";
import { user, room, session, authenticator, account } from "./schema";

export const roomRelations = relations(room, ({one}) => ({
	user: one(user, {
		fields: [room.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	rooms: many(room),
	sessions: many(session),
	authenticators: many(authenticator),
	accounts: many(account),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const authenticatorRelations = relations(authenticator, ({one}) => ({
	user: one(user, {
		fields: [authenticator.userId],
		references: [user.id]
	}),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));