import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';
import { Col, Grid } from '../grid';

interface HeaderProps {
  collapse?: boolean;
}

export const Header = (props: HeaderProps) => {
  const { collapse } = props;

  return (
    <header className={collapse ? 'collapsed' : ''}>
      <Grid classes="content" collapse>
        <Col>
          <img src={logo} className="logo" />
        </Col>
        <Col>
          <nav>
            <Link to="guverments/">Gobiernos</Link>
            <Link to="volunteers/">Voluntarios</Link>
            <Link to="projects/">Proyectos</Link>
            <Link to="sponsors/">Donaciones</Link>
          </nav>
        </Col>
      </Grid>
    </header>
  );
};
