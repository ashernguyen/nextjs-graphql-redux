import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { ApplicationState } from '@client/reducers/types';
import { Dispatch, Thunk } from '@client/types';
import { Actions } from '@client/actions/types';
import reducer from '@client/reducers';

export default (initialState: ApplicationState) => {
  const middlewares = [thunk as Thunk];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger'); //eslint-disable-line

    middlewares.push(logger);
  }

  return createStore<ApplicationState, Actions, { dispatch: Dispatch }, {}>(
    reducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
};
