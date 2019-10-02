import { createSelector } from 'reselect';
import { ApplicationState, ProductsState, FilteredOptions } from '@client/reducers/types';
import { Product } from '@client/types';
import { filterProductByOptions } from '@client/utils';

export const selectProductsState = () => (state: ApplicationState) => state.products;

export const selectFilteredOptions = () =>
  createSelector<ApplicationState, ProductsState | undefined, FilteredOptions | null>(
    selectProductsState(),
    itemsState => (itemsState ? itemsState.filteredOptions : null)
  );

export const selectProductsLoading = () =>
  createSelector<ApplicationState, ProductsState | undefined, boolean>(
    selectProductsState(),
    itemsState => (itemsState ? itemsState.loading : false)
  );

export const selectProductsError = () =>
  createSelector<ApplicationState, ProductsState | undefined, boolean>(
    selectProductsState(),
    itemsState => (itemsState ? itemsState.error : false)
  );

export const selectProductSizes = () =>
  createSelector<ApplicationState, ProductsState | undefined, string[]>(
    selectProductsState(),
    itemsState => (itemsState ? itemsState.sizes : [])
  );

export const selectProductsData = () =>
  createSelector<ApplicationState, ProductsState | undefined, Product[]>(
    selectProductsState(),
    itemsState => {
      if (!itemsState) {
        return [];
      }

      const { data, filteredOptions } = itemsState;

      return filterProductByOptions(data, filteredOptions);
    }
  );
