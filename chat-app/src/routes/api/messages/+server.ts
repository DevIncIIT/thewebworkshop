import type { RequestHandler } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { message, user } from "$lib/server/db/schema";
import { desc, eq } from "drizzle-orm";

export const GET: RequestHandler = async () => {
    const messages = await db
        .select({
            content: message.content,
            username: user.username
        })
        .from(message)
        .leftJoin(user, eq(message.userId, user.id))
        .orderBy(desc(message.id));

    return new Response(JSON.stringify(messages), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};