import { action } from 'typesafe-actions';
import { ActionTypes, AsyncActionCreator } from '@client/actions/types';
import { FilteredOptions, ApplicationState } from '@client/reducers/types';
import { ITEMS_API_URI } from '@client/configs/constants';
import { fetchAsync, getProductSizes } from '@client/utils';
import { Product } from '@client/types';

export const fetchProductsRequest = () => action(ActionTypes.FETCH_PRODUCTS_REQUEST);

export const fetchProductsSuccess = (data: Product[]) =>
  action(ActionTypes.FETCH_PRODUCTS_SUCCESS, { data });

export const fetchProductsFailure = () => action(ActionTypes.FETCH_PRODUCTS_FAILURE);

export const updateProductSizes = (sizes: string[]) =>
  action(ActionTypes.UPDATE_PRODUCT_SIZES, { sizes });

export const setFilteredOptions = (filteredOptions: FilteredOptions) =>
  action(ActionTypes.FILTER_PRODUCTS, { filteredOptions });

export const fetchProducts: AsyncActionCreator<Promise<void>> = (
  url: string = ITEMS_API_URI
) => async dispatch => {
  dispatch(fetchProductsRequest());

  try {
    const data = await fetchAsync<Product[]>(url);
    // Add products to store
    dispatch(fetchProductsSuccess(data));
    // Get product sizes from data then add to store
    dispatch(updateProductSizes(getProductSizes(data)));
  } catch {
    dispatch(fetchProductsFailure());
  }
};

export const shouldFetchProducts = (state: ApplicationState): boolean => {
  if (state.products && (state.products.data.length !== 0 || state.products.loading)) {
    return false;
  }

  return true;
};

export const fetchProductsIfNeeded: AsyncActionCreator<Promise<void>> = (url?: string) => async (
  dispatch,
  getState
) => {
  const state = getState();

  // Only fetch products when data is empty or not being fetched
  if (shouldFetchProducts(state)) {
    await dispatch(fetchProducts(url));
  }
};
