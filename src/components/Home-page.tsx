import React, { useEffect, useRef, useState } from 'react';

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
        <p className="center-content">
          Si deseas unite al equipo y colaborar puedes hacerlo en este{' '}
          <a href="https://forms.gle/3CUo2tuomGHXU6yg9" target="_blank">
            formulario 📓
          </a>
        </p>
      </PageSection>
      <Footer />
    </main>
  );
};
