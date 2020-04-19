import React from 'react';
import renderer from 'react-test-renderer';

import Email from './Email';

describe('Email Link', () => {
  it('renders correctly with an email address', () => {
    const tree = renderer
      .create(<Email emailAddress='test@user.com' />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('does not render without an email', () => {
    const tree = renderer
      .create(<Email emailAddress={null} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
