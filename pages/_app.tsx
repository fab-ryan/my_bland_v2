import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { lightTheme, darkTheme } from './lib/theme';
import { useEffect, useState } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      setTheme(darkTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
