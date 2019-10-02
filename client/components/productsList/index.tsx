import React, { FC, useCallback, useEffect } from 'react';
import Router from 'next/router';
import queryString from 'query-string';
import { getProductSize } from '@client/utils';
import { ProductsListProps } from '@client/components/productsList/types';
import { Product } from '@client/types';
import ProductItem from '@client/components/product';
import { Flex, Text } from '@client/components/core';
import FilteredOptionsBar from '@client/components/productsList/FilteredOptionsBar';
import Placeholder from '@client/components/productsList/Placeholder';

const ProductsList: FC<ProductsListProps> = ({
  products,
  loading,
  error,
  sizes,
  filteredOptions,
  setFilteredOptions
}) => {
  // Show loading placeholder when fetching products
  if (loading) {
    return <Placeholder />;
  }

  // Show error message when fetching product is failure
  if (error) {
    return (
      <Flex px={[0, 3, 3, 3]} alignItems="center" justifyContent="center" width={1}>
        <Text p={3} bg="red.4" color="white" width={1}>
          Opp...something wrong happened! Please try again.
        </Text>
      </Flex>
    );
  }

  // Update filtered options when router is changed in client side
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const { query } = queryString.parseUrl(url);

      if (query.size) {
        setFilteredOptions({
          size: getProductSize(query.size)
        });
      }
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  const renderProduct = useCallback(
    (product: Product) => (
      <ProductItem
        width={[1, 1 / 2, 1 / 3, 1 / 4]}
        as="li"
        product={product}
        pr={[0, 3, 3, 3]}
        mb={4}
        key={`products-list-item-${product.index}`}
      />
    ),
    []
  );

  return (
    <Flex flexDirection="column" width={1}>
      <FilteredOptionsBar
        filteredOptions={filteredOptions}
        setFilteredOptions={setFilteredOptions}
        sizes={sizes}
      />
      <Flex pl={[0, 3, 3, 3]} as="ol" m={0} justifyContent="flex-start" flexWrap="wrap" width={1}>
        {products.map(renderProduct)}
      </Flex>
    </Flex>
  );
};

ProductsList.displayName = 'ProductsList';

export default ProductsList;
