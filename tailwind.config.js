/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      food: "#fb2100",
      movie: "#5d2719",
      character: "#ffec3e",
      fashion: "#00c3a2",
      music: "#ff69b1",
      living: "#009bdc",
      etc: "#000",
      "gray-dark": "#5D5E64",
      gray: "#888888",
      "gray-light": "#EAEAEA",
      black: "#1D1D1D",
    },

    fontFamily: {
      sans: ["Pretendard Variable", "Pretendard", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      h6: [
        "10px",
        {
          lineHeight: "14px",
          letterSpacing: "-0.015em",
        },
      ],
      h5: [
        "13px",
        {
          lineHeight: "17.55px",
          letterSpacing: "-0.015em",
        },
      ],
      h4: [
        "15px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.015em",
        },
      ],
      h3: [
        "18px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.015em",
        },
      ],
      h2: [
        "20px",
        {
          lineHeight: "27px",
          letterSpacing: "-0.015em",
        },
      ],
      h1: [
        "32px",
        {
          lineHeight: "43px",
          letterSpacing: "-0.015em",
        },
      ],
    },
    extend: {
      spacing: {
        15: "15px",
        23: "23px",
      },
      borderRadius: {
        sm: "10px",
        DEFAULT: "20px",
        lg: "100px",
      },
      animation: {
        a: ".3s cubic-bezier(.38,.1,.36,.9) forwards a",
      },
      keyframes: {
        a: {
          "0%": {
            "box-shadow": "0 0 0 hsla(0,0%,95%,0)",
            opacity: 0,
            transform: "translateY(0)",
          },
          "1%": {
            "box-shadow": "0 0 0 hsla(0,0%,95%,0)",
            opacity: 0,
            transform: "translateY(10px)",
          },
          to: {
            "box-shadow": "0 0 500px hsla(0,0%,95%,0)",
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
