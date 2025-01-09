import starlightPlugin from "@astrojs/starlight-tailwind";
import typography from "@tailwindcss/typography";
import {
	isolateInsideOfContainer,
	scopedPreflightStyles,
} from "tailwindcss-scoped-preflight";
import { fontFamily } from "tailwindcss/defaultTheme";

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
export const content = ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"];
export const plugins = [
	typography,
	scopedPreflightStyles({
		isolationStrategy: isolateInsideOfContainer(".tailwind-preflight"),
	}),
	starlightPlugin(),
];
export const theme = {
	extend: {
		fontFamily: {
			body: [...fontFamily.sans],
			montserrat: ["Montserrat Variable", ...fontFamily.sans],
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
	},
};
