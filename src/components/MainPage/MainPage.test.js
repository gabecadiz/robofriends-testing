import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
//runs before each of the tests
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filters robot correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'j',
    isPending: false,
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)

  //instance gives access to all methods on MainPage component
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }]);
})

it('filters robot correctly second check', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false,
  }
  const filteredRobots = []
  const wrapper3 = shallow(<MainPage {...mockProps3} />)

  //instance gives access to all methods on MainPage component
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})

it('Main page displays loading when isPending is set to true', () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: true,
  }
  const wrapper4 = shallow(<MainPage {...mockProps4} />)

  expect(wrapper4.contains(<h1>Loading</h1>)).toEqual(true)

})