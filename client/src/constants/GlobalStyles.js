import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --bg: hsl(195 100% 8%);
  --bg2: hsl(196 100% 11%);
  --bg3: hsl(197 100% 14%);
  --bg4: hsl(195 97% 15%);
  --bg5: hsl(193 98% 16%);
  --accent: hsl(27 87% 67%);
  --shadow-color:186 100% 4%;
  --text-color: white;


  --neon-pink: hsl(317 100% 54%);
  --clr-bg: hsl(323 21% 16%);
  --error: var(--accent);
  --success: green;
  --danger: hsl(12 100% 53%); 

  --shadow-elevation-low:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
    1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
  --shadow-elevation-medium:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  --shadow-elevation-high:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
    2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
    4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
    7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
    11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
    17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
    25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);

  @media(prefers-color-scheme: light) {
    --shadow-color:195 100% 8%;
    --bg: hsl(49, 94%, 93%);
    --bg2: hsl(34, 100%, 89%);
    --bg3: hsl(30, 79%, 85%);
    --accent: hsl(181, 43%, 77%);
    --clr-bg: hsl(323 21% 16%);
    --text-color: black;
    }
}
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd {
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s ease-in-out;
  }
  
  html, body {
    height: 100%;
  }
 
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    
  }
  a{
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  
  input, button, textarea, select {
    font: inherit;
  }

  #__next {
    isolation: isolate;
  }
  
  
`;
export const MasterWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
