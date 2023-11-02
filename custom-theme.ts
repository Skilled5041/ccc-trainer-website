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
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #326585
		"--color-primary-50": "224 232 237", // #e0e8ed
		"--color-primary-100": "214 224 231", // #d6e0e7
		"--color-primary-200": "204 217 225", // #ccd9e1
		"--color-primary-300": "173 193 206", // #adc1ce
		"--color-primary-400": "112 147 170", // #7093aa
		"--color-primary-500": "50 101 133", // #326585
		"--color-primary-600": "45 91 120", // #2d5b78
		"--color-primary-700": "38 76 100", // #264c64
		"--color-primary-800": "30 61 80", // #1e3d50
		"--color-primary-900": "25 49 65", // #193141
		// secondary | #8886b6
		"--color-secondary-50": "237 237 244", // #ededf4
		"--color-secondary-100": "231 231 240", // #e7e7f0
		"--color-secondary-200": "225 225 237", // #e1e1ed
		"--color-secondary-300": "207 207 226", // #cfcfe2
		"--color-secondary-400": "172 170 204", // #acaacc
		"--color-secondary-500": "136 134 182", // #8886b6
		"--color-secondary-600": "122 121 164", // #7a79a4
		"--color-secondary-700": "102 101 137", // #666589
		"--color-secondary-800": "82 80 109", // #52506d
		"--color-secondary-900": "67 66 89", // #434259
		// tertiary | #0f8073
		"--color-tertiary-50": "219 236 234", // #dbecea
		"--color-tertiary-100": "207 230 227", // #cfe6e3
		"--color-tertiary-200": "195 223 220", // #c3dfdc
		"--color-tertiary-300": "159 204 199", // #9fccc7
		"--color-tertiary-400": "87 166 157", // #57a69d
		"--color-tertiary-500": "15 128 115", // #0f8073
		"--color-tertiary-600": "14 115 104", // #0e7368
		"--color-tertiary-700": "11 96 86", // #0b6056
		"--color-tertiary-800": "9 77 69", // #094d45
		"--color-tertiary-900": "7 63 56", // #073f38
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
		// surface | #788bc4
		"--color-surface-50": "235 238 246", // #ebeef6
		"--color-surface-100": "228 232 243", // #e4e8f3
		"--color-surface-200": "221 226 240", // #dde2f0
		"--color-surface-300": "201 209 231", // #c9d1e7
		"--color-surface-400": "161 174 214", // #a1aed6
		"--color-surface-500": "120 139 196", // #788bc4
		"--color-surface-600": "108 125 176", // #6c7db0
		"--color-surface-700": "90 104 147", // #5a6893
		"--color-surface-800": "72 83 118", // #485376
		"--color-surface-900": "59 68 96" // #3b4460
	}
};
