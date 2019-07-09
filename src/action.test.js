import * as actions from './actions'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'test search term';
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe('requestRobots', () => {
  it('handles requesting robots API', () => {
    //create fake store that has thunk middleware, waits for any functions that are returned from an action
    const store = mockStore();
    //dispatch will get sent into requestRobots(), receive the actions
    store.dispatch(actions.requestRobots())
    const action = store.getActions()

    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction)

  })
  it('should execute fetch data', () => {
    const store = mockStore();
    expect.assertions(2);

    return store.dispatch(actions.requestRobots())
      .then(() => {
        const actions = store.getActions()
        //if successful type = REQUEST_ROBOTS_SUCCESS
        expect(actions[1].type).toEqual("REQUEST_ROBOTS_SUCCESS")
        //if successfull it will be an array of 10 users
        expect(actions[1].payload.length).toEqual(10)

      })
  })

})
