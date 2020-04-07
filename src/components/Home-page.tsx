import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer } from './common';
import { PageSection } from './sections';

export const HomePage = () => {
  const [collapseHeader, setCollapseHeader] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      e => {
        if (document.getElementById('main').scrollTop > 20) {
          setCollapseHeader(true);
        }

        if (document.getElementById('main').scrollTop < 20) {
          setCollapseHeader(false);
        }
      },
      true
    );
  }, []);

  return (
    <main>
      <Header collapse={collapseHeader} />
      <PageSection theme="light">
        <h1 className="cormorant big">COVID-19 amenaza con abrumar a los servicios gubernamentales</h1>
        <p className="big margin-top-three">
          Estamos ayudando a los gobiernos a encontrar voluntarios en tecnología, comunicaciones y operaciones.
        </p>
        <div className="buttons-list margin-top-three">
          <a href="https://forms.gle/cMXrYdXGxQo6QSrw9" className="button" target="_blank">
            Gobiernos
          </a>
          <a href="https://forms.gle/3CUo2tuomGHXU6yg9" className="button" target="_blank">
            Voluntarios
          </a>
        </div>
      </PageSection>
      <Footer theme="light" classes="padding-top-three" />
    </main>
  );
};
