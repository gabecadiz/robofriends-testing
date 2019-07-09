import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';

it('Expect to render ErrorBoundry', () => {
  expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
})

it('Expect state hasError true if component catches error', () => {
  const wrapper = shallow(<ErrorBoundry />)
  wrapper.instance().componentDidCatch('error')

  expect('hasError' in wrapper.state()).toEqual(true)
})