import * as React from 'react';
import { HomePage } from '../../../src/components';
import { render } from 'enzyme';

describe ('HomePage', () => {

  it('renders correctly', () => {
    const homepage = render(<HomePage />);
    expect(homepage).toMatchSnapshot();
  });
});

