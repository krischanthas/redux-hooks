import { createStore } from 'redux';
import reducer from './reducer';
import uuid from 'uuid/v4';

const initialState = {
    todos: [
      {
        id: uuid(),
        name: 'Read a bit',
        complete: true
      },
      {
        id: uuid(),
        name: 'Do laundry',
        complete: false
      }
    ]
  };

export const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);