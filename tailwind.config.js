const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        "0.2vw": "0.2vw",
      },
      padding: {
        "8pc": "8%",
      },
      scale: {
        108: "1.08",
        109: "1.09",
      },
      height: {
        "448px": "448px",
        "7.4rem": "7.4rem",
      },
      width: {
        "360px": "360px",
        "45rem": "45rem",
      },
      maxWidth: {
        "800px": "800px",
      },
      colors: {
        netflix: {
          black: "#111",
          bannerGradientMiddle: "rgba(37, 37, 37, 0.61)",
          bannerButtonBg: "rgba(51, 51, 51, 0.51)",
          signInBtn: "#e50914",
          profileHeaderColor: "#282c2d",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },

        ".login-gradient": {
          "background-image":
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);",
        },

        ".profile-h1-border": {
          "border-bottom": "1px solid #282c2d",
        },
      });
    }),
  ],
};
