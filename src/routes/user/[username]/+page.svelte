<script lang="ts">
	import type { PageServerData } from "./$types";

	export let data: PageServerData;


	const problemTypes: Record<string, number> = {
		"Ad Hoc": 0,
		"Advanced Math": 0,
		"Brute Force": 0,
		"Capture the Flag": 0,
		"Constructive": 0,
		"Data Structures": 0,
		"Divide and Conquer": 0,
		"Dynamic Programming": 0,
		"Game Theory": 0,
		"Geometry": 0,
		"Graph Theory": 0,
		"Greedy Algorithms": 0,
		"Implementation": 0,
		"Interactive": 0,
		"Intermediate Math": 0,
		"Recursion": 0,
		"Regular Expressions": 0,
		"Simple Math": 0,
		"Simulation": 0,
		"String Algorithms": 0,
		"Uncategorized": 0
	};

	data.problems.forEach((problem) => {
		problem.types.forEach((type) => {
			problemTypes[type]++;
		});
	});
</script>

<div>
	<div class="m-32 bg-surface-100 flex content-center items-center">

	</div>
</div>
