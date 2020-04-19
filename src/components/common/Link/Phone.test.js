import React from 'react';
import renderer from 'react-test-renderer';

import Phone from './Phone';

describe('Phone Link', () => {
  it('renders correctly with an email address', () => {
    const tree = renderer
      .create(<Phone phoneNumber='1111111111' />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('does not render without an email', () => {
    const tree = renderer
      .create(<Phone phoneNumber={null} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
