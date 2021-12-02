import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --dark-1: hsl(186 100% 4%);
    --dark-2: hsl(195 100% 8%);
    --dark-3: hsl(196, 100%, 11%);
    --dark-4: hsl(197, 100%, 14%);
    --dark-5: hsl(195, 97%, 15%);
    --dark-6: hsl(193, 98%, 16%);
    --accent: hsl(27, 87%, 67%);
    --neon-pink: hsl(317 100% 54%);
    --clr-bg: hsl(323 21% 16%);
    --error: var(--accent);
    --success: green;
    --text-color: white;

    @media(prefers-color-scheme: light) {
      --dark-1: hsl(49, 94%, 93%);
    --dark-2: hsl(195 100% 8%);
    --dark-3: hsl(34, 100%, 89%);
    --dark-5: hsl(30, 79%, 85%);
    --dark-6: hsl(193, 98%, 16%);
    --accent: hsl(181, 43%, 77%);
    --neon-pink: hsl(317 100% 54%);
    --clr-bg: hsl(323 21% 16%);
    --error: var(--accent);
    --success: green;
    --text-color: black;
    }
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd {
    margin: 0;
  }
  
  html, body {
    height: 100%;
    background: var(--dark-1);
  }
 
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    
  }
  a{
    color:var(--text-color);
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
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
