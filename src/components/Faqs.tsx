import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer } from './common';
import { PageSection } from './sections';
import { ListedFaq } from './text';

export const Faqs = () => {
  return (
    <main>
      <Header appearance="extra-collapsed" />
      <PageSection theme="light" classes="padding-top-three padding-bottom-three">
        <h1 className="cormorant big">Gobiernos</h1>
        <div className="margin-top-one padding-left-one">
          <ListedFaq
            question="¿Cómo solicitar ayuda?"
            answer="Completa este formulario y comparte la mayor cantidad de información posible sobre el problema que estás tratando de resolver y el apoyo que se requiera."
          />
          <ListedFaq
            question="¿Los voluntarios deberán convertirse en empleados de gobierno?"
            answer="No. Los equipos de gobierno son los encargados de definir las actividades y el acceso que los voluntarios tienen."
          />
          <ListedFaq
            question="¿Puedo solicitar un equipo completo?"
            answer="Si, dependerá de los voluntarios disponibles."
          />
          <ListedFaq
            question="¿Cuándo conseguiremos un voluntario?"
            answer="Después de solicitar voluntarios, nuestro equipo solicitará más información para determinar sus necesidades. Trabajaremos lo más rápido posible para asignar un equipo que se ajuste a sus proyectos y necesidades"
          />
          <ListedFaq
            question="¿Necesitamos pagar voluntarios o proporcionar recursos?"
            answer="No. Se les pide a los voluntarios que ofrezcan su tiempo como voluntarios y deben tener el equipo básico y los recursos necesarios para ayudarlos con sus tareas. Para conocer más sobre qué esperamos de nuestros voluntarios y los gobiernos que solicitan puede revisar nuestro manifiesto."
          />
          <ListedFaq
            question="¿Quién gestiona el proyecto?"
            answer="La gestión del proyecto será bilateral, tanto la dependencia como los voluntarios son responsables de administrar el proyecto. El equipo asignado estará calificado, pero el éxito del proyecto depende de la involucración activa y directa."
          />
          <div className="buttons-list margin-top-three">
            <a
              href="https://drive.google.com/open?id=1i2-2Q66kvUI_8R9Lr-WQDb_2BK--tHdq8o181zZzGEM"
              className="button"
              target="_blank"
            >
              {' '}
              Manifiesto{' '}
            </a>
          </div>
        </div>
      </PageSection>
      <PageSection theme="dark" classes="padding-top-three padding-bottom-three">
        <h1 className="cormorant big">Voluntarios</h1>
        <div className="margin-top-one padding-left-one">
          <ListedFaq
            question="¿Es esta una oportunidad pagada?"
            answer="No. Esta es una oportunidad de voluntariado. Estamos pidiendo profesionales con experiencia que puedan ofrecer su tiempo como voluntarios en este esfuerzo. Para conocer más sobre qué esperamos de nuestros voluntarios y los gobiernos que solicitan puede revisar nuestro manifiesto."
          />
          <ListedFaq
            question="¿Estoy empleado por mi organización de colocación potencial?"
            answer="No. Esta es una oportunidad de voluntariado. Su condición de voluntario no es un paso hacia la obtención de empleo. Para conocer más sobre qué esperamos de nuestros voluntarios y los gobiernos que solicitan puede revisar nuestro manifiesto."
          />
          <ListedFaq
            question="¿Qué debe hacer un voluntario si algo sale mal con el proyecto?"
            answer="Comunicate con los miembros del equipo  a través de los canales establecidos. La mayoría de nuestra comunicación la hacemos a través de Slack."
          />
          <ListedFaq
            question="¿Quién verá mis datos?"
            answer="Sus datos solo se compartirán con los miembros del equipo y los socios del proyecto cuando sea necesario para facilitar la colocación. Lea más en nuestra Política de Privacidad de Datos."
          />
          <ListedFaq
            question="¿Tengo garantizada una colocación?"
            answer="No. Las necesidades de los gobiernos pueden ser muy específicas y variadas. Te pedimos que seas paciente.  Estamos evaluando cuidadosamente las necesidades de los gobiernos locales y uniendo a los solicitantes con los gobiernos locales en función de la experiencia y la habilidad."
          />
          <ListedFaq
            question="¿Puedo ser voluntario con todo mi equipo, organización o empresa?"
            answer="Si. Cuando estés llenando el formulario, en la parte de comentarios, proporciona información de tu equipo."
          />
          <ListedFaq
            question="¿Debo tomar un permiso de mi trabajo actual?"
            answer="Este es un trabajo de voluntariado. Te pedimos que nos des a conocer tu disponibilidad para poder añadirte a uno de nuestros equipos."
          />
          <ListedFaq
            question="¿Cómo examina la Brigada Digital Mx a los voluntarios?"
            answer="Los voluntarios envían una solicitud que es revisada por el equipo de Brigada Digital Mx. Si creemos que el solicitante podría ser una buena opción para un proyecto, se le asigna un equipo y un líder de proyecto. La asignación del proyecto depende de la urgencia e importancia de nuestros proyectos y de la experiencia y preparación necesaria de cada proyecto."
          />
          <ListedFaq
            question="¿Quién gestiona el proyecto?"
            answer="El voluntario o en su caso el líder de proyecto en conjunto con el enlace de gobierno son los  responsables de administrar el proyecto. Conectamos voluntarios con gobiernos que necesitan ayuda, pero el éxito del proyecto depende de su colaboración directa. Brigada Digital MX hará lo posible para apoyar los proyectos establecidos."
          />
          <ListedFaq
            question="¿Donde trabajaré?"
            answer="Si encontramos a un proyecto que necesite tus características, serás asignado a él  y trabajarás con una agencia gubernamental, estatal o local de manera digital y remota."
          />
          <ListedFaq
            question="¿Cuánto durarán los proyectos?"
            answer="Nuestros proyectos tienen diferentes enfoques y alcances, cada uno variará en el tiempo requerido."
          />
          <div className="buttons-list margin-top-three">
            <a
              href="https://drive.google.com/open?id=1i2-2Q66kvUI_8R9Lr-WQDb_2BK--tHdq8o181zZzGEM"
              className="button"
              target="_blank"
            >
              {' '}
              Manifiesto{' '}
            </a>
          </div>
        </div>
      </PageSection>
      <Footer theme="light" classes="padding-top-three" />
    </main>
  );
};
