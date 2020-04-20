import React, { FunctionComponent } from 'react';

interface ColProps {
  verticalAligned?: boolean;
  classes?: string;
}

export const Col: FunctionComponent<ColProps> = ({ verticalAligned, children, classes = '' }) => (
  <div className={`col ${verticalAligned ? 'vertical-aligned' : ''} ${classes}`}>{children}</div>
);
