import React, { FunctionComponent } from 'react';

interface PageSectionProps {
  theme?: string;
  classes?: string;
}

export const PageSection: FunctionComponent<PageSectionProps> = ({ theme = 'dark', children, classes = '' }) => {
  return <section className={`page-section ${theme} ${classes}`}>{children}</section>;
};
