import React from 'react';
import { Container } from './styles';
import { useHistory } from 'react-router-dom';

export default function Header({ onToggleTheme, selectedTheme }) {
  const history = useHistory();

  const handleNavigate = () => {
    history.push('/');
  };

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>

      <button type="button" onClick={handleNavigate} style={{ color: '#fff' }}>
        Voltar para home
      </button>
    </Container>
  );
}
