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
		particles: {
			color: {
				value: "rgba(207, 227, 239, 1)",
			},
			links: {
				enable: true,
				color: "rgba(207, 227, 239, 1)"
			},
			move: {
				enable: true
			},
			number: {
				value: 0
			}
		},
		interactivity: {
			events: {
				onHover: {
					enable: true,
					mode: ["grab", "attract", "trail"]
				},
			}
		}
	};

	let particlesInit = async (engine: Engine) => {
		await loadFull(engine);
	};

	const title = "Insert Title Here";
</script>

<div class="flex items-center justify-center flex-col">
	<div class="w-fit mt-96 relative" style="--typing-steps: {title.length}">
		<h1
			class="text-8xl border-r-4 font-bold typing-animation whitespace-nowrap overflow-hidden font-mono"
		>
			{title}
		</h1>
		<svelte:component
			this={ParticlesComponent}
			id="tsparticles"
			options={particlesConfig}
			{particlesInit}
		/>
	</div>
	<div class="w-full -mt-64">
		<svg
			height="1080"
			id="visual"
			viewBox="0 0 1920 1080"
			width="1920"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class="fill-primary-200"
				d="M0 638L32 630.2C64 622.3 128 606.7 192 599.2C256 591.7 320 592.3 384 605C448 617.7 512 642.3 576 644.2C640 646 704 625 768 631.7C832 638.3 896 672.7 960 668.3C1024 664 1088 621 1152 591.5C1216 562 1280 546 1344 559.7C1408 573.3 1472 616.7 1536 630.2C1600 643.7 1664 627.3 1728 619.7C1792 612 1856 613 1888 613.5L1920 614L1920 1081L1888 1081C1856 1081 1792 1081 1728 1081C1664 1081 1600 1081 1536 1081C1472 1081 1408 1081 1344 1081C1280 1081 1216 1081 1152 1081C1088 1081 1024 1081 960 1081C896 1081 832 1081 768 1081C704 1081 640 1081 576 1081C512 1081 448 1081 384 1081C320 1081 256 1081 192 1081C128 1081 64 1081 32 1081L0 1081Z"
			/>
			<path
				class="fill-primary-400"
				d="M0 680L32 690.5C64 701 128 722 192 732C256 742 320 741 384 739.8C448 738.7 512 737.3 576 731.8C640 726.3 704 716.7 768 728.8C832 741 896 775 960 776.7C1024 778.3 1088 747.7 1152 727C1216 706.3 1280 695.7 1344 711.5C1408 727.3 1472 769.7 1536 776.8C1600 784 1664 756 1728 752C1792 748 1856 768 1888 778L1920 788L1920 1081L1888 1081C1856 1081 1792 1081 1728 1081C1664 1081 1600 1081 1536 1081C1472 1081 1408 1081 1344 1081C1280 1081 1216 1081 1152 1081C1088 1081 1024 1081 960 1081C896 1081 832 1081 768 1081C704 1081 640 1081 576 1081C512 1081 448 1081 384 1081C320 1081 256 1081 192 1081C128 1081 64 1081 32 1081L0 1081Z"
			/>
			<path
				class="fill-primary-600"
				d="M0 835L32 833.8C64 832.7 128 830.3 192 831.2C256 832 320 836 384 845.5C448 855 512 870 576 878.3C640 886.7 704 888.3 768 893C832 897.7 896 905.3 960 904.3C1024 903.3 1088 893.7 1152 876.2C1216 858.7 1280 833.3 1344 824C1408 814.7 1472 821.3 1536 819.8C1600 818.3 1664 808.7 1728 803.7C1792 798.7 1856 798.3 1888 798.2L1920 798L1920 1081L1888 1081C1856 1081 1792 1081 1728 1081C1664 1081 1600 1081 1536 1081C1472 1081 1408 1081 1344 1081C1280 1081 1216 1081 1152 1081C1088 1081 1024 1081 960 1081C896 1081 832 1081 768 1081C704 1081 640 1081 576 1081C512 1081 448 1081 384 1081C320 1081 256 1081 192 1081C128 1081 64 1081 32 1081L0 1081Z"
			/>
			<path
				class="fill-primary-800"
				d="M0 922L32 930.2C64 938.3 128 954.7 192 967.2C256 979.7 320 988.3 384 986.5C448 984.7 512 972.3 576 962C640 951.7 704 943.3 768 950.8C832 958.3 896 981.7 960 978.5C1024 975.3 1088 945.7 1152 936C1216 926.3 1280 936.7 1344 948C1408 959.3 1472 971.7 1536 967.7C1600 963.7 1664 943.3 1728 931.8C1792 920.3 1856 917.7 1888 916.3L1920 915L1920 1081L1888 1081C1856 1081 1792 1081 1728 1081C1664 1081 1600 1081 1536 1081C1472 1081 1408 1081 1344 1081C1280 1081 1216 1081 1152 1081C1088 1081 1024 1081 960 1081C896 1081 832 1081 768 1081C704 1081 640 1081 576 1081C512 1081 448 1081 384 1081C320 1081 256 1081 192 1081C128 1081 64 1081 32 1081L0 1081Z"
			/>
		</svg>
		<div class="bg-primary-800 h-64 flex items-center justify-center">
			<h1 class="text-3xl m-96 text-white">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores assumenda
				autem delectus enim facilis fugiat molestiae, numquam, pariatur perferendis porro
				quam sapiente tempora tenetur ullam vel velit veniam voluptatem.
			</h1>
		</div>
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
