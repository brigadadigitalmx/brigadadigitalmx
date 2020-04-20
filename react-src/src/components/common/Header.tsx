import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import logo from '../../img/logo.png';
import { Col, Grid } from '../grid';

interface HeaderProps {
  collapse?: boolean;
  appearance?: string;
}

export const Header = (props: HeaderProps) => {
  const { collapse, appearance = '' } = props;
  const collapseClass = collapse ? 'collapsed' : '';
  const classes = `${collapseClass} ${appearance}`;

  return (
    <header className={classes}>
      <Grid classes="content" collapse>
        <Col>
          <Link to="/">
            <img src={logo} alt="Brígada Dígital MX Logo" className="logo" />
          </Link>
        </Col>
        <Col classes="two-spaces">
          <nav>
            <Link to="/projects">Proyectos</Link>
            <Link to="/us">Nosotros</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </nav>
        </Col>
      </Grid>
    </header>
  );
};
