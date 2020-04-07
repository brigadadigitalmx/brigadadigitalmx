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
      <PageSection theme="dark padding-bottom-three">
        <h1 className="cormorant big margin-top-three">Que hacemos?</h1>
        <p className="margin-top-three">
          Somos un esfuerzo voluntario y no partidista para ayudar al gobierno federal, estatal y local con tecnología,
          datos, diseño, operaciones, comunicaciones, gestión de proyectos y más durante la crisis de COVID-19.
          Brindamos asistencia gratuita a todas las entidades gubernamentales en todo el país; Si podemos ayudar, lo
          haremos.
        </p>
        <p className="margin-top-two">
          Respuesta digital de EE. UU. Fue fundada por ex CTO adjuntos de EE. UU. Y veteranos experimentados de la
          industria tecnológica que lideraron las políticas federales de datos abiertos y pusieron en marcha el Servicio
          Digital de EE. UU.
        </p>
        <p className="margin-top-two">
          Juntos ya hemos obtenido más de 3.000 personas calificadas y calificadas dispuestas a ayudar.
        </p>
        <p className="margin-top-two">
          Obtenga más información sobre los <Link to="/">proyectos</Link>
        </p>
      </PageSection>
      <Footer theme="light" classes="padding-top-three" />
    </main>
  );
};
