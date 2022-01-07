export const COLORS_DARK = {
  body: "hsl(195 100% 8%)",
  section: "hsl(196, 100%, 11%)",
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
  body: "hsl(49, 94%, 93%)",
  section: "hsl(34, 100%, 89%)",
  article: "hsl(30, 79%, 85%)",
  borderColor: "hsl(30, 79%, 80%)",
  accent: "hsl(181, 43%, 77%)",
  textColor: "black",

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
