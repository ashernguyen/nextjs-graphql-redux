import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setFilteredOptions } from '@client/actions/products';
import {
  selectFilteredOptions,
  selectProductsData,
  selectProductsLoading,
  selectProductsError,
  selectProductSizes
} from '@client/selectors/products';
import ProductsList from '@client/components/productsList';

export default connect(
  createSelector(
    selectProductsData(),
    selectFilteredOptions(),
    selectProductsLoading(),
    selectProductsError(),
    selectProductSizes(),
    (products, filteredOptions, loading, error, sizes) => ({
      products,
      filteredOptions,
      loading,
      error,
      sizes
    })
  ),
  { setFilteredOptions }
)(ProductsList);
