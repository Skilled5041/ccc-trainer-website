<script lang="ts">
	import "../app.postcss";
	import { LightSwitch, AppShell, AppBar } from "@skeletonlabs/skeleton";
	import { fade } from "svelte/transition";
	import BracketIcon from "$lib/components/BracketIcon.svelte";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	let showNav: boolean = false;
	onMount(() => {
		showNav = true;
	});

	const delay = $page.url.pathname === "/" ? 500 : 0;
	const duration = $page.url.pathname === "/" ? 1000 : 0;
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				{#if showNav}
					<div
						transition:fade={{ delay: delay, duration: duration }}
						class="rounded-100% border-2 p-2 mr-3 border-surface-600-300-token"
					>
						<a href="/">
							<BracketIcon width="25px" height="25px" delayAmount={duration} />
						</a>
					</div>
					<a
						transition:fade={{ delay: delay, duration: duration }}
						class="text-2xl font-bold"
						href="/"
					>
						CCC Trainer
					</a>
				{/if}
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="flex gap-12 mr-2">
					<div class="pr-0.5">
						<a href="/" class="brackets relative">Test</a>
					</div>
					<div class="pr-0.5">
						<a href="/about" class="brackets relative">About</a>
					</div>
					<LightSwitch />
				</div>
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
		padding-right: 50%;
		transition: all 0.2s ease-in-out;
		right: 10px;
		position: absolute;
	}

	.brackets::after {
		content: "}";
		font-size: 1.25em;
		opacity: 0;
		padding-left: 50%;
		transition: all 0.2s ease-in-out;
		left: 10px;
		position: absolute;
	}

	.brackets:hover::before{
        opacity: 1;
		padding-right: 100%;
	}
	.brackets:hover::after {
		opacity: 1;
		padding-left: 100%;
	}
</style>
