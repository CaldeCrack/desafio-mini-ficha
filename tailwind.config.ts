import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
		primary: "#154fbf",
		accent: "#1f61f7",
		"light-grey": {
			10: "#f5f7fa",
			20: "#ebeff5",
			30: "#3b6a8d",
			50: "#719ec0",
			80: "#506e84",
		},
		"dark-gray": "#343840",
		"light-red": "#ffe1e1",
		"green": {
			20: "#d9fff5",
			40: "#11d39d",
		},
		"blue-light-10": "#dbf0ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
