import React from 'react';
import renderer from 'react-test-renderer';

import Dates from './Dates';


describe('Dates', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Dates startDate="Jan 2017" endDate="Dec 2017" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with the end date as present', () => {
    const tree = renderer
      .create(<Dates startDate="Jan 2017" endDate={null} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('does not render without a start and end date', () => {
    const tree = renderer
      .create(<Dates startDate={null} endDate={null} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
