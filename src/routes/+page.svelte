<script lang="ts">
	import type { SvelteComponent } from "svelte";
	import { onMount } from "svelte";
	import { loadFull } from "tsparticles";
	import type { ISourceOptions } from "tsparticles-engine";
	import type { Engine } from "tsparticles-engine";

	let ParticlesComponent: typeof SvelteComponent;

	onMount(async () => {
		const module = await import("svelte-particles");
		ParticlesComponent = module.default as typeof SvelteComponent;
	});

	const particlesConfig: ISourceOptions = {
		fullScreen: false,
		particles: {
			color: {
				value: "rgba(167, 167, 167, 0.8)"
			},
			links: {
				enable: true,
				color: "rgba(167, 167, 167, 0.8)",
				opacity: 1,
				distance: 150
			},
			move: {
				enable: true
			},
			number: {
				limit: 40
			},
			opacity: {
				value: 1
			},
			size: {
				value: 4,
				animation: {
					enable: true,
					speed: 20,
					minimumValue: 1
				}
			}
		},
		life: {
			duration: {
				sync: false,
				value: 3
			},
			count: 0,
			delay: {
				random: {
					enable: true,
					minimumValue: 0.5
				},
				value: 1
			}
		},
		interactivity: {
			events: {
				onHover: {
					enable: true,
					mode: ["grab", "attract", "trail", "bubble"]
				}
			},
			modes: {
				trail: {
					delay: 0.0333,
					quantity: 1,
					pauseOnStop: true
				},
				grab: {
					distance: 250,
					links: {
						opacity: 1
					}
				},
				bubble: {
					opacity: 1,
					distance: 250
				}
			}
		}
	};

	const particlesInit = async (engine: Engine) => {
		await loadFull(engine);
	};

	const title = "CCC Trainer";
</script>

<div class="absolute w-full h-full">
	<svelte:component
		this={ParticlesComponent}
		class="w-full h-full"
		options={particlesConfig}
		{particlesInit}
	/>
</div>
<div class="flex items-center justify-center flex-col">
	<div class="w-fit mt-72 relative" style="--typing-steps: {title.length}">
		<h1
			class="text-8xl border-r-4 border-surface-900-50-token font-bold animate-text-typing whitespace-nowrap overflow-hidden font-mono"
		>
			{title}
		</h1>
	</div>
</div>
