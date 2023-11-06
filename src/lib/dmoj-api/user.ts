export interface UserResponse {
	id: string;
	username: string;
	points: number;
	performance_points: number;
	problem_count: number;
	solved_problems: string[];
	// e.g. user, admin
	rank: string;
	rating: number;
	organizations: string[];
	contests: Contest[];
}

export interface Contest {
	key: string;
	score: number;
	cumulative_time: number;
	rating: number;
	raw_rating: number;
	performance: number;
}
