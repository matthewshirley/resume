import React from 'react';
import renderer from 'react-test-renderer';

import Link from './Link';

describe('Phone Link', () => {
  it('renders a link when a href is passed', () => {
    const tree = renderer
      .create(<Link href="google.com">Test</Link>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('does not link without a href', () => {
    const tree = renderer
      .create(<Link href={null}>Test</Link>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
