module.exports = {
  // mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "1.2screen": "120vh",
        "1.1screen": "110vh",
        "1.5screen": "150vh",
        "2screen": "200vh",
        "2.5screen": "250vh",
        "3screen": "300vh",
        "3.5screen": "350vh",
        "4screen": "400vh",
        "4.5screen": "450vh",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
