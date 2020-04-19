import React from 'react';
import renderer from 'react-test-renderer';

import List from './List';


describe('List', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<List highlights={['a', 'b', 'c']} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
