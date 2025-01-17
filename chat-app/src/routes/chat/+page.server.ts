import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const username = cookies.get("username");
    if (!username) {
        redirect(302, "/");
    }
    return { username };
};
