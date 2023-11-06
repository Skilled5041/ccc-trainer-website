import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { DmojApiResponse } from "$lib/dmoj-api/response";
import type { UserResponse } from "$lib/dmoj-api/user";
import { supabase } from "$lib/supabase/supabase";

export const load: PageServerLoad = async ({ params }) => {
	const { username } = params;

	if (username.length === 0) {
		throw error(400, "Invalid username.");
	}

	const response = await fetch(`https://dmoj.ca/api/v2/user/${username}`);
	if (!response.ok) {
		throw error(502, "Error fetching user data.");
	}

	const user: DmojApiResponse<UserResponse> = await response.json();
	if (user.error || !user.data) {
		if (user.error?.code === 404) {
			throw error(404, "User not found.");
		}
		console.log(user.error?.message);
		throw error(502, "Error fetching user data.");
	}

	// Must use this due to supabase bug
	const { data: problems, error: problemsError } = await supabase.rpc("problems_in", {
		vals: user.data.object.solved_problems
	});

	if (problemsError) {
		console.log(problemsError.message);
		throw error(500, "Error fetching user data.");
	}

	return {
		user: user.data,
		problems: problems ?? []
	};
};
