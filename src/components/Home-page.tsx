import React from 'react';
import logo from '../img/logo.png';

export const HomePage = () => {
  return (
    <main>
      <img src={logo} className="logo" />
      <h1 className="center-content">Sitio en construcción 🚧</h1>
      <p className="center-content">
        Si deseas unite al equipo y colaborar puedes hacerlo en este{' '}
        <a href="https://forms.gle/3CUo2tuomGHXU6yg9" target="_blank">
          formulario 📓
        </a>
      </p>
    </main>
  );
};
