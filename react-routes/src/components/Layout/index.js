import React from 'react';
import { useTheme } from 'styled-components';

import { Routes } from '../../Routes';
import Footer from '../Footer';
import Header from '../Header';
import { BrowserRouter, Link, useHistory } from 'react-router-dom';
import { Nav } from './styles';

export default function Layout({ onToggleTheme, selectedTheme }) {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />

      <Nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/posts/1235456'}>Post</Link>
      </Nav>

      <Routes />

      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </BrowserRouter>
  );
}
