import React, { useState, useMemo, useEffect, useRef } from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'dark'
  );

  const firstRender = useRef(true);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    console.debug({ theme });
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />

      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
}

export default App;
