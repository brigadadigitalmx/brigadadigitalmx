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
      <PageSection theme="light" classes="padding-top-three padding-bottom-three">
        <h1 className="cormorant big">
          COVID-19 representa un reto de organización y servicios para los gobiernos, y creemos usar herramientas
          digitales para ayudar.
        </h1>
        <p className="big margin-top-three">
          Estamos ayudando a entidades de gobierno federal, estatal y municipal durante la crisis de salud pública
          ocasionada por COVID-19, a través de voluntarios digitales con experiencia en procesamiento de datos,
          tecnología, comunicaciones y operaciones.
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
      <PageSection theme="dark" classes="padding-top-three padding-bottom-three">
        <h1 className="cormorant big">Gobiernos</h1>
        <p className="big margin-top-three">
          Si trabaja en alguna oficina de gobierno y necesita ayuda para superar la crisis de COVID-19, estamos armando
          una red de voluntarios capacitados en procesamiento de datos, tecnología, comunicaciones y operaciones que
          puede ayudarlo.
        </p>
        <p className="big margin-top-one">
          Llene el siguiente formato y nos pondremos en contacto para analizar sus necesidades y encontrar voluntarios
          que puedan ayudarle:
        </p>
        <div className="buttons-list margin-top-three">
          <a href="https://forms.gle/cMXrYdXGxQo6QSrw9" className="button" target="_blank">
            Gobiernos
          </a>
        </div>
      </PageSection>
      <PageSection theme="light" classes="padding-top-three padding-bottom-three">
        <h1 className="cormorant big">Voluntarios</h1>
        <p className="big margin-top-three">
          Si quieres aportar tu conocimiento y tiempo, estamos aceptando voluntarios con conocimientos y experiencia
          técnica que los gobiernos necesitan.
        </p>
        <p className="big">Necesitamos usuarios con conocimiento en las siguientes áreas:</p>
        <h2 className="margin-top-two">Tecnología</h2>
        <p className="big margin-top-one">
          Científicos de datos, ingenieros de front-end y back-end, diseñadores, gerentes de ingeniería, gerentes de
          producto, investigadores de usuarios, escritores.
        </p>
        <h2 className="margin-top-two">Políticas Públicas</h2>
        <p className="big margin-top-one">Políticas públicas, Epidemiólogos.</p>
        <h2 className="margin-top-two">Comunicaciones</h2>
        <p className="big margin-top-one">
          Estrategas de contenido, redactores, diseñadores gráficos y gerentes de redes sociales.
        </p>
        <div className="buttons-list margin-top-three">
          <a href="https://forms.gle/cMXrYdXGxQo6QSrw9" className="button" target="_blank">
            Voluntarios
          </a>
        </div>
      </PageSection>
      <Footer theme="dark" classes="padding-top-three" />
    </main>
  );
};
