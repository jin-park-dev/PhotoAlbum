// Must have at least one test file in this directory or Mocha will throw an error.

import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

it('Should have a header called "About"', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h1').text();
    const expected = 'About';

    expect(actual).toEqual(expected);
  }
);
