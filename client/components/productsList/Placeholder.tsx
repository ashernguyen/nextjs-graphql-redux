import React, { memo } from 'react';
import { Flex } from '@client/components/core';
import { Placeholder } from '@client/components/styledComponents';
import ProductPlaceholder from '@client/components/product/Placeholder';

const ProductsListPlaceholder = memo(() => {
  const renderProductPlaceholder = (idx: number) => (
    <ProductPlaceholder
      as="li"
      pl={0}
      pr={[0, 3, 3, 3]}
      mb={4}
      key={`products-list-item-placeholder-${idx}`}
      width={[1, 1 / 2, 1 / 3, 1 / 4]}
    />
  );

  return (
    <Flex flexDirection="column" width={1}>
      <Flex px={[0, 3, 3, 3]}>
        <Placeholder height="64px" width={1} mb={5} />
      </Flex>
      <Flex pl={[0, 3, 3, 3]} as="ol" m={0} justifyContent="flex-start" flexWrap="wrap" width={1}>
        {Array.from(Array(10).keys(), i => i).map(renderProductPlaceholder)}
      </Flex>
    </Flex>
  );
});

ProductsListPlaceholder.displayName = 'ProductsListPlaceholder';

export default ProductsListPlaceholder;
