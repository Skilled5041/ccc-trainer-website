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
				value: "rgba(207, 227, 239, 1)"
			},
			links: {
				enable: true,
				color: "rgba(207, 227, 239, 1)",
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
					delay: 0.1,
					quantity: 3,
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

	const title = "Insert Title Here";
</script>

<div class="absolute w-full h-full">
	<svelte:component class="w-full h-full" this={ParticlesComponent} options={particlesConfig} {particlesInit} />
</div>
<div class="flex items-center justify-center flex-col">
	<div class="w-fit mt-96 relative" style="--typing-steps: {title.length}">
		<h1
			class="text-8xl border-r-4 font-bold typing-animation whitespace-nowrap overflow-hidden font-mono"
		>
			{title}
		</h1>
	</div>
</div>

<style>
	@keyframes typing {
		from {
			width: 0;
			visibility: hidden;
			border-color: transparent;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blink-text-cursor {
		from,
		to {
			border-right-color: transparent;
		}
		50% {
			border-right-color: white;
		}
	}

	.typing-animation {
		animation: typing 3s steps(var(--typing-steps)), blink-text-cursor 0.727s step-end infinite;
	}
</style>
