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
          COVID-19 representa un reto al que nuestra sociedad pocas veces se ha enfrentado y creemos que las herramientas
          digitales pueden contribuir para ayudar y combatir esta pandemia.
        </h1>
        <p className="big margin-top-three">
          Estamos ayudando a entidades de gobierno federal, estatal y municipal durante la crisis a través de voluntarios 
          digitales con experiencia en procesamiento de datos, tecnología, comunicaciones y operaciones. 
        </p>
        <div className="buttons-list margin-top-three">
          <a href="https://forms.gle/QPkMBTPEuE4WzTkv7" className="button" target="_blank">
            Gobiernos
          </a>
          <a href="https://forms.gle/pEyMsQ7SPT6z6A2V9" className="button" target="_blank">
            Voluntarios
          </a>
        </div>
      </PageSection>
      <PageSection theme="dark" classes="padding-top-three padding-bottom-three">
        <h1 className="cormorant big">Gobiernos</h1>
        <p className="big margin-top-three">
         Si eres parte de alguna dependencia de gobierno que necesita ayuda para combatir la crisis ocasionada por el COVID-19,
          estamos construyendo una comunidad de voluntarios. Las capacidades de los voluntarios está enfocada en tecnología,
          comunicaciones y operaciones. ¡Podemos ayudar! 
        </p>
        <p className="big margin-top-one">
          Para pode ayudar necesitamos conocer tus necesidades, llena el siguiente formato (no toma más de 10 minutos) y posteriormente estaremos en contacto. 
        </p>
        <div className="buttons-list margin-top-three">
          <a href="https://forms.gle/QPkMBTPEuE4WzTkv7" className="button" target="_blank">
            Solicita Ayuda
          </a>
        </div>
      </PageSection>
      <PageSection theme="light" classes="padding-top-three padding-bottom-three">
        <h1 className="cormorant big">Voluntarios</h1>
        <p className="big margin-top-three">
          Si quieres aportar tu conocimiento, tiempo y esfuerzo ¡Estamos buscando voluntarios!
        </p>
        <p className="big">Necesitamos usuarios con conocimiento en las siguientes áreas:</p>
        <h2 className="margin-top-two">Tecnología</h2>
        <p className="big margin-top-one">
          Científicos de datos, ingenieros de front-end y back-end, diseñadores, gerentes de ingeniería,
          gerentes de producto, investigadores de usuarios, escritores.
        </p>
        <h2 className="margin-top-two">Políticas Públicas</h2>
        <p className="big margin-top-one">Licenciados/ Maestros en relaciones internacionales, ciencia política,
          economistas, abogados.
        </p>
        <h2 className="margin-top-two">Comunicaciones</h2>
        <p className="big margin-top-one">
          Estrategas de contenido, redactores, diseñadores gráficos y gerentes de redes sociales.
        </p>
        <div className="buttons-list margin-top-three">
          <a href="https://forms.gle/pEyMsQ7SPT6z6A2V9" className="button" target="_blank">
            Inscríbete
          </a>
        </div>
      </PageSection>
      <Footer theme="dark" classes="padding-top-three" />
    </main>
  );
};
