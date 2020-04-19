import React from 'react';
import renderer from 'react-test-renderer';

import Summary from './Summary';
import ThemeProviderWrapper from '../../utils/ThemeProviderWrapper';


describe('Summary', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProviderWrapper>
          <Summary summary="Test" theme={{ colors: { gray2: '#ffffff' } }} />
        </ThemeProviderWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('does not render without a summary', () => {
    const tree = renderer
      .create(<Summary summary={null} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
