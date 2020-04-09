import React from 'react';

import { Header, Footer } from './common';
import { PageSection } from './sections';

export const Us = () => {
  return (
    <main>
      <Header appearance="extra-collapsed" />
      <PageSection theme="light" classes="padding-top-three padding-bottom-three">
        <h1 className="cormorant big">Nosotros</h1>
        <div className="margin-top-one padding-left-one">
          <p>
            Brigadas Digitales MX busca ayudar a distintas entidades de gobierno federal, estatal y municipal durante la
            crisis de salud pública ocasionada por COVID-19 para contribuir con servicios digitales críticos que ayuden
            a brindar una respuesta pública efectiva ante esta crisis.{' '}
          </p>
          <p className="margin-top-one">
            Somos una organización de voluntarios, sin ninguna adscripción política, que ayuda a los esfuerzos de
            distintas entidades gubernamentales en México con tecnología, datos, operaciones, comunicación,
            administración de proyectos y otras tareas para enfrentar la crisis generada por COVID-19. Brindamos
            servicios gratuitos a todas las entidades de gobierno en todo el país. Si podemos ayudar, lo hacemos.{' '}
          </p>
          <p className="margin-top-one">
            Brigadas Digitales MX es una iniciativa de la Sociedad de Científicos de Datos de México, A.C. creada por un
            grupo de expertos en temas de datos y tecnología para contribuir a la gestión de medidas y soluciones que
            ayuden durante desastres naturales y crisis humanitarias. Hoy queremos contribuir a combatir la propagación
            de COVID-19 en todo el país así como ayudar a diseñar medidas y soluciones para enfrentar esta crisis.{' '}
          </p>
        </div>
      </PageSection>
      <Footer theme="dark" classes="padding-top-three" />
    </main>
  );
};
