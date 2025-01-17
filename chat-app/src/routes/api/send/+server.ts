import type { RequestHandler } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { message, user } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";

export const POST: RequestHandler = async ({ request }) => {
    const { username, content } = await request.json();

    if (!username || !content) {
        return new Response("Username and content are required", { status: 400 });
    }

    // Get user id from username
    const userResult = await db
        .select({ id: user.id })
        .from(user)
        .where(eq(user.username, username))
        .limit(1);

    if (userResult.length === 0) {
        return new Response("User not found", { status: 404 });
    }

    // Insert message
    await db.insert(message).values({
        content,
        userId: userResult[0].id
    });

    return new Response(JSON.stringify({ success: true }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
