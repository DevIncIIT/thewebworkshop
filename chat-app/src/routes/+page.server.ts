import { db } from "$lib/server/db";
import { user } from "$lib/server/db/schema";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const username = formData.get("username");
        if (!username) {
            return new Response("Username is required", { status: 400 });
        }
        await db.insert(user).values({ username: username as string });
        cookies.set("username", username as string, { path: "/" });
        return redirect(302, `/chat`);
    }
};
