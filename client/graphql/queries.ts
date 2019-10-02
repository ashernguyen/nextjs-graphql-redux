import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
  query getProducts($filteredOptions: FilteredOptions) {
    products(filteredOptions: $filteredOptions) {
      index
      productName
      productImage
      price
      size
      isSale
      isExclusive
    }
    sizes
  }
`;
