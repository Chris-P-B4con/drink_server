import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --dark-1: #001214;
    --dark-2: #001f29;
    --dark-3: #002837;
    --dark-4: #003246;
    --dark-5: #01394c;
    --dark-6: #013f51;
    --accent: #f4a261;
    --clr-neon: hsl(317 100% 54%);
    --clr-bg: hsl(323 21% 16%);
    --error: var(--accent);
    --success: green;
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
