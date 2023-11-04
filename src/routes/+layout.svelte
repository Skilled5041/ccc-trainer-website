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
		<AppBar shadow="shadow-2xl">
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
				<div class="pr-0.5">
					<a href="/" class="brackets">Test2</a>
				</div>
				<div class="pr-0.5">
					<a href="/" class="brackets">Test1</a>
				</div>
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
