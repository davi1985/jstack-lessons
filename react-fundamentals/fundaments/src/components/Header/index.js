import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../Button';
import Title from '../Title';
export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{title}</Title>

      <Button onClick={onToggleTheme}>Mudar tema</Button>

      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "JStack's Blog",
};
