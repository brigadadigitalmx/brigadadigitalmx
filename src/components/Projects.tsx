import React from 'react';

import { Header, Footer } from './common';
import { PageSection } from './sections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Projects = () => {
  return (
    <main>
      <Header appearance="extra-collapsed" />
      <PageSection theme="light" classes="padding-top-three padding-bottom-three">
        <h1 className="cormorant big">Proyectos</h1>
        <div className="margin-top-one padding-left-one">
          <p>Estaremos publicando sobre nuestros proyectos conforme vayan avanzando.</p>
          <p className="margin-top-one">
            Si quieres conocer más acerce de nosotros síguenos en{' '}
            <a href="#" target="_blank">
              @Brigadas_DigMX x <FontAwesomeIcon icon={faTwitter} />
            </a>
          </p>
        </div>
      </PageSection>
      <Footer theme="dark" classes="padding-top-three" />
    </main>
  );
};
