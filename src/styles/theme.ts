const lightTheme = {
  fonts: {
    main: "DM Sans",
    secondary: "Epilogue",
  },
  colors: {
    green1: "#30BC72",
    background: "#f3f3f3",
    white1: "#CCCCCC",
    white2: "#F8F8F8",
    white3: "#FBFAFA",
    title: "#161617;",
    subtitle: "#232232",
    black2: "#232232",
    black3: "#3C3C3C",
    blue: " #2067F8",
    red2: "#EA596F;",
    red1: "#F6406C",
    onboardingBg: "#ffffff",
    footer: "#ffffff",
    iconContainer: "#fbfbfb",
  },
  animations: {
    link: "color 0.3s ease",
    buttonGlow: "box-shadow 0.3s ease",
  },
  shadows: {
    button: "0px 4px 30px rgba(34, 105, 251, 0.8);",
    icon: "0px 10px 25px rgba(35, 107, 254, 0.2);",
  },
  breakpoints: {
    xxs: "only screen and (max-width: 30rem)",
    xs: "only screen and (max-width: 40rem)",
    s: "only screen and (max-width: 50rem)",
    m: "only screen and (max-width: 70rem)",
  },
};

const darkTheme = {
  fonts: {
    main: "DM Sans",
    secondary: "Epilogue",
  },
  colors: {
    green1: "#30BC72",
    background: "#232232",
    onboardingBg: "#2C2B3E",
    white1: "#CCCCCC",
    white2: "#F8F8F8",
    white3: "#FBFAFA",
    title: "#FEFEFE;",
    black2: "#232232",
    subtitle: "#FEFEFE",
    black3: "#3C3C3C",
    blue: " #2067F8",
    red2: "#EA596F;",
    red1: "#F6406C",
    iconContainer: "#1f1f31",
    footer: "#181828",
  },
  animations: {
    link: "color 0.3s ease",
    buttonGlow: "box-shadow 0.3s ease",
  },
  shadows: {
    button: "0px 4px 30px rgba(34, 105, 251, 0.8);",
    icon: "0px 10px 25px rgba(35, 107, 254, 0.2);",
  },
  breakpoints: {
    xxs: "only screen and (max-width: 30rem)",
    xs: "only screen and (max-width: 40rem)",
    s: "only screen and (max-width: 50rem)",
    m: "only screen and (max-width: 70rem)",
  },
};

export { darkTheme, lightTheme };
