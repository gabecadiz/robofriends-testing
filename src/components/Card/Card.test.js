import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
  //.assertions is the amount of expect tests in the file
  expect.assertions(2)
  //length returns the amount of things that has been rendered
  expect(shallow(<Card />).length).toBe(1)
  expect(shallow(<Card />)).toMatchSnapshot()
})