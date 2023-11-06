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
				value: "rgba(156, 191, 211, 0.8)",
				animation: {
					enable: true,
					speed: 30,
					sync: false,
					s: {
						enable: true,
						speed: 30
					}
				}
			},
			links: {
				enable: true,
				color: "rgba(156, 191, 211, 0.8)",
				opacity: 1,
				distance: 150,
				animation: {
					enable: true,
					speed: 30,
					sync: false
				}
			},
			move: {
				enable: true,
				angle: 360,
				random: true,
				speed: {
					min: 0.2,
					max: 1
				}
			},
			number: {
				value: 50,
				limit: 50
			},
			opacity: {
				value: 1,
				random: {
					enable: true,
					minimumValue: 0.5
				},
				animation: {
					enable: true,
					speed: 1,
					opacity_min: 0.5,
					sync: false
				}
			},
			size: {
				value: 4,
				animation: {
					enable: true,
					speed: 20,
					minimumValue: 1,
					sync: false
				}
			}
		},
		smooth: false,
		interactivity: {
			events: {
				onHover: {
					enable: true,
					mode: ["grab", "light"],
					parallax: {
						enable: true,
						force: 10,
						smooth: 100
					}
				}
			},
			modes: {
				grab: {
					distance: 250,
					links: {
						opacity: 1
					}
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
<div class="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" style="--typing-steps: {title.length}">
	<h1
		class="text-8xl border-r-4 border-surface-900-50-token font-bold animate-text-typing whitespace-nowrap overflow-hidden font-mono"
	>
		{title}
	</h1>
</div>
