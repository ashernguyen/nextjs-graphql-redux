import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '@client/reducers/types';
import {
  setFilteredOptions,
  fetchProductsFailure,
  fetchProductsSuccess,
  fetchProductsRequest,
  updateProductSizes
} from '@client/actions/products';

export enum ActionTypes {
  FILTER_PRODUCTS = '@@products/FILTER_PRODUCTS',
  UPDATE_PRODUCT_SIZES = '@@product/UPDATE_PRODUCT_SIZES',
  FETCH_PRODUCTS_REQUEST = '@@products/FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS = '@@products/FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = '@@products/FETCH_PRODUCTS_FAILURE'
}

export type SetFilteredOptions = ReturnType<typeof setFilteredOptions>;

export type UpdateProductSizes = ReturnType<typeof updateProductSizes>;

export type FetchProductsRequest = ReturnType<typeof fetchProductsRequest>;

export type FetchProductsSuccess = ReturnType<typeof fetchProductsSuccess>;

export type FetchProductsFailure = ReturnType<typeof fetchProductsFailure>;

export type ProductsActions =
  | SetFilteredOptions
  | UpdateProductSizes
  | FetchProductsRequest
  | FetchProductsSuccess
  | FetchProductsFailure;

export type Actions = ProductsActions;

export type ThunkReturn<R> = ThunkAction<R, ApplicationState, null, Actions>;

export type AsyncActionCreator<R> = ActionCreator<ThunkReturn<R>>;
