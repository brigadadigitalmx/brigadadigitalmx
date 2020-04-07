import React, { FunctionComponent } from 'react';

interface GridProps {
  classes?: string;
  collapse?: boolean;
}

export const Grid: FunctionComponent<GridProps> = ({ children, classes = '', collapse }) => (
  <div className={`grid ${classes} ${collapse ? 'collapse' : ''}`}>{children}</div>
);
