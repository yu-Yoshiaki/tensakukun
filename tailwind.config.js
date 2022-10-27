module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "scale-up-right":
          "scale-up-right 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "scale-down-right":
          "scale-down-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "scale-up-right": {
          "0%": {
            transform: "scale(0)",
            "transform-origin": "100% 50%",
          },
          to: {
            transform: "scale(1)",
            "transform-origin": "100% 50%",
          },
        },

        "scale-down-right": {
          "0%": {
            transform: "scale(1)",
            "transform-origin": "100% 50%",
          },
          to: {
            transform: "scale(.5)",
            "transform-origin": "100% 50%",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
