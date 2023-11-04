<script lang="ts">
	import "../app.postcss";
	import { LightSwitch, AppShell, AppBar } from "@skeletonlabs/skeleton";
	import { fade } from "svelte/transition";
	import BracketIcon from "$lib/components/BracketIcon.svelte";
	import { onMount } from "svelte";

	let showNav: boolean = false;
	onMount(() => {
		showNav = true;
	});
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar shadow="shadow-2xl">
			<svelte:fragment slot="lead">
				{#if showNav}
					<div
						transition:fade={{ duration: 1000 }}
						class="rounded-100% border-2 p-2 mr-3 border-surface-600-300-token"
					>
						<BracketIcon width="25px" height="25px" />
					</div>
					<h1 transition:fade={{ duration: 1000 }} class="text-2xl font-bold">
						Title Goes Here
					</h1>
				{/if}
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if showNav}
					<div transition:fade={{ duration: 1000 }} class="flex">
						<div class="pr-0.5">
							<a href="/" class="brackets">Test2</a>
						</div>
						<div class="pr-0.5">
							<a href="/" class="brackets">Test1</a>
						</div>
					</div>
				{/if}

				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>

<style>
	.brackets::before {
		content: "{";
		font-size: 1.25em;
		opacity: 0;
		transform: none;
		transition: all 0.2s ease-in-out;
	}

	.brackets:hover::before {
		opacity: 1;
		margin-right: 0.5em;
		transform: translateX(-0.5em);
	}

	.brackets::after {
		content: "}";
		font-size: 1.25em;
		opacity: 0;
		translate: none;
		transition: all 0.2s ease-in-out;
	}

	.brackets:hover::after {
		opacity: 1;
		margin-left: 0.5em;
		transform: translateX(0.5em);
	}
</style>
