import { compose, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setFilteredOptions } from '@client/actions/products';
import { selectFilteredOptions } from '@client/selectors/products';
import { PRODUCTS_QUERY } from '@client/graphql/queries';
import { InputProps, Variables, Response } from '@client/containers/types';
import ProductsList from '@client/components/productsList';

export default compose(
  connect(
    createSelector(
      selectFilteredOptions(),
      filteredOptions => ({
        filteredOptions
      })
    ),
    { setFilteredOptions }
  ),
  graphql<InputProps, Response, Variables, InputProps & Response>(PRODUCTS_QUERY, {
    options: ({ filteredOptions }) => ({
      variables: { filteredOptions }
    }),
    props: ({ data: { loading, error, products, sizes }, ownProps }) => ({
      ...ownProps,
      loading,
      error,
      products,
      sizes
    })
  })
)(ProductsList);
