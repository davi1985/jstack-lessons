import React from 'react';
import { useTheme } from 'styled-components';

import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';

export default function Layout({ onToggleTheme, selectedTheme }) {
  const theme = useTheme();

  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />

      <PostsList />

      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />

      <div
        style={{
          marginTop: 24,
          backgroundColor: theme.footerBackgroundColor,
          padding: 24,
          borderRadius: theme.borderRadius,
        }}
      >
        Hello, are you ok?
      </div>
    </>
  );
}
