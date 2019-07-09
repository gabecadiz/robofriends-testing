import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('Expect to render Header', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
})

it('Expect Header to never re-render', () => {
  const wrapper = shallow(<Header />)
  const instance = wrapper.instance();
  expect(instance.shouldComponentUpdate()).toEqual(false);
})