export const COLORS_DARK = {
  body: "hsl(195 100% 8%)",
  section: "hsl(195 100% 8%)",
  article: "hsl(196, 100%, 11%)",
  borderColor: "hsl(195, 97%, 15%)",
  accent: "hsl(27, 87%, 67%)",
  text: "white",

  clrbg: "hsl(323 21% 16%)",
  inactive: "hsl(0, 0%, 50%)",
  neonPink: "hsl(317 100% 54%)",
  error: "hsl(27, 87%, 67%)",
  success: "green",
  danger: "hsl(12 100% 53%)",
};

export const COLORS_LIGHT = {
  body: "#eeeeee",
  section: "#eeeeee",
  article: "#dddddd",
  borderColor: "#bbbbbb",
  accent: "#29a8ab",
  text: "black",

  clrbg: "hsl(323 21% 16%)",
  inactive: "hsl(0, 0%, 50%)",
  neonPink: "hsl(317 100% 54%)",
  error: "hsl(27, 87%, 67%)",
  success: "green",
  danger: "hsl(12 100% 53%)",
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
};
