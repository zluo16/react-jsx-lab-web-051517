import React from 'react';
import { shallow } from 'enzyme';

import FillerText from '../components/FillerText';
import Webpage from '../components/Webpage';

describe('<Webpage />', function () {
  const wrapper = shallow(<Webpage />);

  it('should contain the right title', function () {
    expect(wrapper.text().includes("The world's coolest webpage")).toBeTruthy();
  });

  it('should have two instances of the `FillerText` component', function () {
    expect(wrapper.find(FillerText).length).toEqual(2);
  });
});
