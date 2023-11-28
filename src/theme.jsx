import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  fontFamily: 'Roboto, sans-serif',
  mainColors: {
    // blue: '#2400ff',
    blue: '#e8fa61',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    background-image: linear-gradient(to right, #8360c3, #2ebf91);
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 18px;
    margin: 0;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const GlobalTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>
        <GlobalStyles/>
        {children}
    </ThemeProvider>;
};
