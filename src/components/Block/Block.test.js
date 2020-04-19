import React from 'react';
import renderer from 'react-test-renderer';

import Block from './Block';
import ThemeProviderWrapper from '../../utils/ThemeProviderWrapper';

describe('Block', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Block title="Test Block" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with children', () => {
    const tree = renderer
      .create(<Block title="Test Block"><p>Test Children</p></Block>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with a border', () => {
    const tree = renderer
      .create(
        <ThemeProviderWrapper>
          <Block title="Test Block" borderBottom />
        </ThemeProviderWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
