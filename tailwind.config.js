/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary": "#e1b6ff",
        "on-primary": "#490f72",
        "primary-container": "#612c8a",
        "on-primary-container": "#f2daff",
        "surface": "#1d1b1e",
        "on-surface": "#e7e1e5",
        "error": "#d32f2f",
        "success": "#66bb6a",
      }
      // colors: {
      //   "primary": "#1afe49",
      //   "on-primary": "#093e11",
      //   "primary-container": "#4b4900",
      //   "on-primary-container": "#eee822",
      //   "surface": "#1c1c16",
      //   "on-surface": "#e6e2d9",
      //   "secondary": "#ffb1c8",
      //   "on-secondary": "#5e1133",
      //   "secondary-container": "#7b2949",
      //   "on-secondary-container": "#ffd9e2",
      // }
      // colors: {
      //   "primary": "#80d998",
      //   "on-primary": "#00391a",
      //   "primary-container": "#005228",
      //   "on-primary-container": "#9bf6b2",
      //   "surface": "#191c19",
      //   "on-surface": "#e1e3de",
      // }
      // colors: {
      //   "primary": "rgba(250,89,46,0.72)",
      //   "on-primary": "#611300",
      //   "primary-container": "#891e00",
      //   "on-primary-container": "#ffdbd2",
      //   "surface": "#201a19",
      //   "on-surface": "#ede0dd",
      // }
    },
  },
  plugins: [],
}

