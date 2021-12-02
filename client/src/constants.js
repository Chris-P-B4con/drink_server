export const COLORS = {
  primaryDark: "hsl(186 100% 4%)",
  dark2: "hsl(195 100% 8%)",
  dark3: "hsl(196, 100%, 11%)",
  secondaryDark: "hsl(197, 100%, 14%)",
  dark5: "hsl(195, 97%, 15%)",
  dark6: "hsl(193, 98%, 16%)",
  accent: "hsl(27, 87%, 67%)",
  neonPink: "hsl(317 100% 54%)",
  clrbg: "hsl(323 21% 16%)",
  error: "hsl(27, 87%, 67%)",
  success: "green",
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
}

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin}px)`,
}