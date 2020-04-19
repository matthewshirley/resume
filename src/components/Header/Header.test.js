import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header name="Test Name" phone="111 111 1111" email="test@user.com" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without a phone or email', () => {
    const tree = renderer
      .create(<Header name="Test Name" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
