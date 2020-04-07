import React from 'react';

interface FooterProps {
  theme?: string;
  classes?: string;
}

export const Footer = (props: FooterProps) => {
  const { theme, classes } = props;

  return (
    <footer className={`${classes} ${theme}`}>
      <h1>Contactanos</h1>
      <p>contacto@brigadadigitalmx.org</p>
    </footer>
  );
};
