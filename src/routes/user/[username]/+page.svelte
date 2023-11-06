<script lang="ts">
	import {
		Chart as ChartJS,
		Legend,
		LineElement,
		PointElement,
		RadialLinearScale,
		Title,
		Tooltip,
		Colors
	} from "chart.js";
	import type { ChartData, ChartOptions } from "chart.js";
	import { Radar } from "svelte-chartjs";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement, Colors);

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

	const chartData: ChartData<"radar", number[]> = {
		labels: Object.keys(problemTypes).filter((type) => problemTypes[type] > 0),
		datasets: [
			{
				label: "Problems",
				data: Object.values(problemTypes).filter((value) => value > 0),
				fill: true
			}
		]
	};

	const chartOptions: ChartOptions<"radar"> = {
		responsive: true,
		elements: {
			line: {
				borderWidth: 3
			}
		},
		plugins: {
			colors: {
				enabled: true
			}
		}
	};
</script>

<div>
	<div class="m-32 bg-surface-100 flex content-center items-center">
		<Radar data={chartData} options={chartOptions} title="Problems Solved By Type" />
	</div>
</div>
