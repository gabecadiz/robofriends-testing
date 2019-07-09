import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton'

it('Expect to render counter button', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
})

it('Correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  //enzyme package method, finds element with id counter and simulates a click
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual('red')
})

it('expect shouldComponentUpdate if state is updated', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  const instance = wrapper.instance();

  expect(instance.shouldComponentUpdate({}, { count: 1 })).toEqual(true);
  expect(instance.shouldComponentUpdate({}, { count: 0 })).toEqual(false);

})