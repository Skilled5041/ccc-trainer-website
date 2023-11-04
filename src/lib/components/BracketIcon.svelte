<script lang="ts">
	import { draw } from "svelte/transition";
	import { onMount } from "svelte";
	import { quintOut, quintIn } from "svelte/easing";

	let ready: boolean = false;
	onMount(() => (ready = true));
	export let width: string = "64px";
	export let height: string = "64px";
	export let vb: string = "0 0 24 24";
	export let delayAmount: number = 0;
</script>

<svg
	{width}
	fill="none"
	{height}
	viewBox={vb}
	class="stroke-gray-900 dark:stroke-gray-50"
	xmlns="http://www.w3.org/2000/svg"
>
	{#if ready}
		<path
			transition:draw={{ delay: delayAmount, duration: 1000, easing: quintIn }}
			d="M9,3H8A3,3,0,0,0,5,6V9a3,3,0,0,1-3,3H2a3,3,0,0,1,3,3v4a3,3,0,0,0,3,3H9"
		/>
		<path
			transition:draw={{ delay: delayAmount, duration: 1000, easing: quintOut }}
			d="M15,3h1a3,3,0,0,1,3,3V9a3,3,0,0,0,3,3h0a3,3,0,0,0-3,3v4a3,3,0,0,1-3,3H15"
		/>
	{/if}
</svg>
