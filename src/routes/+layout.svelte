<script lang="ts">
	import "../app.postcss";
	import { LightSwitch, AppShell, AppBar } from "@skeletonlabs/skeleton";
	import { fade } from "svelte/transition";

	let scroll: number;

</script>

<AppShell>
	<svelte:fragment slot="header">
		<div transition:fade>
			<AppBar shadow="shadow-2xl">
				<svelte:fragment slot="lead">
					<h1 class="text-2xl font-bold">Title Goes Here</h1>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<div class="flex">
						<div class="flex">
							<a href="/" class="brackets">Test2</a>
						</div>
						<div class="flex">
							<a href="/" class="brackets">Test1</a>
						</div>
					</div>

					<LightSwitch />
				</svelte:fragment>
			</AppBar>
		</div>

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