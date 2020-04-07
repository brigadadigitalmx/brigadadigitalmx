import React, { FunctionComponent } from 'react';

interface ColProps {
  verticalAligned?: boolean;
}

export const Col: FunctionComponent<ColProps> = ({ verticalAligned, children }) => (
  <div className={`col ${verticalAligned ? 'vertical-aligned' : ''}`}>{children}</div>
);
