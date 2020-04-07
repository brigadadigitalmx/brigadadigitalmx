import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

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
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
        </Col>
        <Col classes="two-spaces">
          <nav>
            <a href="https://forms.gle/cMXrYdXGxQo6QSrw9" target="_blank">
              Gobiernos
            </a>
            <a href="https://forms.gle/3CUo2tuomGHXU6yg9" target="_blank">
              Voluntarios
            </a>
            <Link to="/">Proyectos</Link>
            <Link to="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </nav>
        </Col>
      </Grid>
    </header>
  );
};
