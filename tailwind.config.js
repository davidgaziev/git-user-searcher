/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				back: "#141C2F",
				main: "#1F2A48",
				search: "#4D597A",
				searchhover: "#9098AD",
			},
		},
	},
	plugins: [],
};
