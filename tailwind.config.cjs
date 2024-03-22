const defaultTheme = require("tailwindcss/defaultTheme");
const {
	scopedPreflightStyles,
	isolateInsideOfContainer,
} = require("tailwindcss-scoped-preflight");
const starlightPlugin = require("@astrojs/starlight-tailwind");
const accent = {
	200: "#b1cce8",
	600: "#076ebd",
	900: "#0f3456",
	950: "#10253b",
};
const gray = {
	100: "#f0f7ff",
	200: "#e2efff",
	300: "#adc4e0",
	400: "#628ec3",
	500: "#2f5a8b",
	700: "#0c3867",
	800: "#00264e",
	900: "#07192d",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	corePlugins: {
		preflight: false,
	},
	plugins: [
		require("@tailwindcss/typography"),
		scopedPreflightStyles({
			isolationStrategy: isolateInsideOfContainer('.tailwind-preflight'),
		}),
		starlightPlugin(),
	],
	theme: {
		extend: {
			fontFamily: {
				body: [...defaultTheme.fontFamily.sans],
				montserrat: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				accent,
				gray,
				deepsea: "#053361",
				azure: "#51A9FF",
				turquoise: "#8DEDCF",
				mist: "#B783FF",
				gold: "#FFC55C",
				sand: "#F2AE46",
				crystal: "#E2EEFB",
				frost: "#F6FAFE",
				indigo: "#8594FF",
				deepblue: "#2e23de",
				aqua: "#9BC1E7",
				deepaqua: "#3b79b8",
			},
			// typography: ({ theme }) => ({
			// 	deepsea: {
			// 		css: {
			// 			'--tw-prose-body': theme('colors.deepsea'),
			// 			'--tw-prose-headings': theme('colors.deepsea'),
			// 			'--tw-prose-lead': theme('colors.deepsea'),
			// 			'--tw-prose-links': theme('colors.deepsea'),
			// 			'--tw-prose-bold': theme('colors.deepsea'),
			// 			'--tw-prose-counters': theme('colors.deepsea'),
			// 			'--tw-prose-bullets': theme('colors.deepsea'),
			// 			'--tw-prose-hr': theme('colorsdeepsea'),
			// 			'--tw-prose-quotes': theme('colors.deepsea'),
			// 			'--tw-prose-quote-borders': theme('colorsdeepsea'),
			// 			'--tw-prose-captions': theme('colors.deepsea'),
			// 			'--tw-prose-code': theme('colors.deepsea'),
			// 			'--tw-prose-pre-code': theme('colors.aqua'),
			// 			'--tw-prose-pre-bg': theme('colors.deepsea'),
			// 			'--tw-prose-th-borders': theme('colorsdeepsea'),
			// 			'--tw-prose-td-borders': theme('colors.deepsea'),
			// 			'--tw-prose-invert-body': theme('colors.deepsea'),
			// 			'--tw-prose-invert-headings': theme('colors.white'),
			// 			'--tw-prose-invert-lead': theme('colorsdeepsea'),
			// 			'--tw-prose-invert-links': theme('colors.white'),
			// 			'--tw-prose-invert-bold': theme('colors.white'),
			// 			'--tw-prose-invert-counters': theme('colors.deepsea'),
			// 			'--tw-prose-invert-bullets': theme('colors.deepsea'),
			// 			'--tw-prose-invert-hr': theme('colors.deepsea'),
			// 			'--tw-prose-invert-quotes': theme('colors.aqua'),
			// 			'--tw-prose-invert-quote-borders': theme('colors.deepsea'),
			// 			'--tw-prose-invert-captions': theme('colors.deepsea'),
			// 			'--tw-prose-invert-code': theme('colors.white'),
			// 			'--tw-prose-invert-pre-code': theme('colorsdeepsea'),
			// 			'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
			// 			'--tw-prose-invert-th-borders': theme('colors.deepsea'),
			// 			'--tw-prose-invert-td-borders': theme('colors.deepsea')
			// 		}
			// 	}
			// })
		},
	},
};
