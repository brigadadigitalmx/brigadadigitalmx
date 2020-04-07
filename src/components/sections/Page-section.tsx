import React, { FunctionComponent } from 'react';

interface PageSectionProps {
  theme?: string;
}

export const PageSection: FunctionComponent<PageSectionProps> = ({ theme = 'dark', children }) => {
  return <section className={`page-section ${theme}`}>{children}</section>;
};
