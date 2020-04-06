import * as React from 'react';
import { HomePage } from '../../../src/components';
import { TestProvider } from '../../../src/utils/test-provider';

describe ('HomePage', () => {
  const stores = {};

  it('renders correctly', () => {
    const homepage = TestProvider(stores).render(<HomePage />);
    expect(homepage).toMatchSnapshot();
  });
});

