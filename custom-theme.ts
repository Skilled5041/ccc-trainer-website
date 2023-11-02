import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const myCustomTheme: CustomThemeConfig = {
	name: "custom-theme",
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "16px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #408fbf
		"--color-primary-50": "226 238 245", // #e2eef5
		"--color-primary-100": "217 233 242", // #d9e9f2
		"--color-primary-200": "207 227 239", // #cfe3ef
		"--color-primary-300": "179 210 229", // #b3d2e5
		"--color-primary-400": "121 177 210", // #79b1d2
		"--color-primary-500": "64 143 191", // #408fbf
		"--color-primary-600": "58 129 172", // #3a81ac
		"--color-primary-700": "48 107 143", // #306b8f
		"--color-primary-800": "38 86 115", // #265673
		"--color-primary-900": "31 70 94", // #1f465e
		// secondary | #b6b4d6
		"--color-secondary-50": "244 244 249", // #f4f4f9
		"--color-secondary-100": "240 240 247", // #f0f0f7
		"--color-secondary-200": "237 236 245", // #edecf5
		"--color-secondary-300": "226 225 239", // #e2e1ef
		"--color-secondary-400": "204 203 226", // #cccbe2
		"--color-secondary-500": "182 180 214", // #b6b4d6
		"--color-secondary-600": "164 162 193", // #a4a2c1
		"--color-secondary-700": "137 135 161", // #8987a1
		"--color-secondary-800": "109 108 128", // #6d6c80
		"--color-secondary-900": "89 88 105", // #595869
		// tertiary | #18d1ba
		"--color-tertiary-50": "220 248 245", // #dcf8f5
		"--color-tertiary-100": "209 246 241", // #d1f6f1
		"--color-tertiary-200": "197 244 238", // #c5f4ee
		"--color-tertiary-300": "163 237 227", // #a3ede3
		"--color-tertiary-400": "93 223 207", // #5ddfcf
		"--color-tertiary-500": "24 209 186", // #18d1ba
		"--color-tertiary-600": "22 188 167", // #16bca7
		"--color-tertiary-700": "18 157 140", // #129d8c
		"--color-tertiary-800": "14 125 112", // #0e7d70
		"--color-tertiary-900": "12 102 91", // #0c665b
		// success | #00ffb3
		"--color-success-50": "217 255 244", // #d9fff4
		"--color-success-100": "204 255 240", // #ccfff0
		"--color-success-200": "191 255 236", // #bfffec
		"--color-success-300": "153 255 225", // #99ffe1
		"--color-success-400": "77 255 202", // #4dffca
		"--color-success-500": "0 255 179", // #00ffb3
		"--color-success-600": "0 230 161", // #00e6a1
		"--color-success-700": "0 191 134", // #00bf86
		"--color-success-800": "0 153 107", // #00996b
		"--color-success-900": "0 125 88", // #007d58
		// warning | #EAB308
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #d21969
		"--color-error-50": "248 221 233", // #f8dde9
		"--color-error-100": "246 209 225", // #f6d1e1
		"--color-error-200": "244 198 218", // #f4c6da
		"--color-error-300": "237 163 195", // #eda3c3
		"--color-error-400": "224 94 150", // #e05e96
		"--color-error-500": "210 25 105", // #d21969
		"--color-error-600": "189 23 95", // #bd175f
		"--color-error-700": "158 19 79", // #9e134f
		"--color-error-800": "126 15 63", // #7e0f3f
		"--color-error-900": "103 12 51", // #670c33
		// surface | #1e1e2b
		"--color-surface-50": "221 221 223", // #f0f0f2
		"--color-surface-100": "210 210 213", // #dedee0
		"--color-surface-200": "199 199 202", // #c7c7ca
		"--color-surface-300": "165 165 170", // #a5a5aa
		"--color-surface-400": "98 98 107", // #62626b
		"--color-surface-500": "30 30 43", // #1e1e2b
		"--color-surface-600": "27 27 39", // #1b1b27
		"--color-surface-700": "23 23 32", // #171720
		"--color-surface-800": "18 18 26", // #12121a
		"--color-surface-900": "15 15 21" // #0f0f15
	}
};
