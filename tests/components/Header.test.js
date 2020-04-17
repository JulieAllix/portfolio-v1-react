import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from 'src/components/Header';

describe('<Header />', () => {
  it('renders a `.menu--open` when <App /> has menuIsOpen prop', () => {
    const wrapper = shallow(<Header menuIsOpen />);
    expect(wrapper.exists('.menu--open')).to.equal(true);
  });
});
