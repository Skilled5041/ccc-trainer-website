const { skeleton } = require("@skeletonlabs/tw-plugin");
import { myCustomTheme } from "./custom-theme";

/** @type {import("tailwindcss").Config} */
module.exports = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: "class",
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		// 3. Append the path to the Skeleton package
		require("path").join(
			require.resolve("@skeletonlabs/skeleton"),
			"../**/*.{html,js,svelte,ts}"
		)
	],
	theme: {
		extend: {
			borderRadius: {
				"100%": "100%"
			},
			fontFamily: {
				mono: ["JetBrainsMono"]
			},
			animation: {
				"text-typing": "typing 3s steps(var(--typing-steps)), blink 727ms step-end infinite"
			},
			keyframes: {
				blink: {
					"0%, 100%": {
						borderRightColor: "transparent"
					},
					"50%": {
						borderRightColor: "currentColor"
					}
				},
				typing: {
					"0%": {
						width: "0",
						visibility: "hidden"
					},
					"100%": {
						width: "100%",
						visibility: "visible"
					}
				}
			}
		}
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
			themes: { custom: [myCustomTheme] }
		})
	]
};
