import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { purgeCss } from "vite-plugin-tailwind-purgecss";

export default defineConfig({
	plugins: [
		sveltekit(),
		purgeCss({
			safelist: {
				// any selectors beginning with "hljs-" will not be purged
				greedy: [/^hljs-/]
			}
		})
	],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	ssr: {
		noExternal: ["tsparticles", "tsparticles-engine", "svelte-particles"]
	}
});
