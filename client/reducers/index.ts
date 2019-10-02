import { combineReducers } from 'redux';
import { ApplicationState } from '@client/reducers/types';
import { Actions } from '@client/actions/types';
import products from '@client/reducers/products';

export default combineReducers<ApplicationState, Actions>({ products });
