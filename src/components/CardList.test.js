import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
  //mock robots array needed for cardlist
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'Johnny',
      email: 'john@email.com'

    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})