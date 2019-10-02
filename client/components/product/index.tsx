import React, { memo } from 'react';
import { Flex, Text } from '@client/components/core';
import { theme } from '@client/configs/styles';
import ProductImage from '@client/components/product/ProductImage';
import { ProductProps } from '@client/components/product/types';

const Product = memo<ProductProps>(
  ({ product, customImgUrl, ...styles }) => {
    const { isExclusive, isSale, productName, productImage, price } = product;

    return (
      <Flex {...styles}>
        <Flex
          width={1}
          p={[3, 4, 4, 4]}
          flexDirection="column"
          css={`
            transition: box-shadow 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
              box-shadow: ${theme.shadows.large};
            }
          `}
        >
          <ProductImage
            width={1}
            imgUrl={customImgUrl ? customImgUrl : `/static/images/${productImage}`}
            imgAlt={productName}
          />
          <Flex width={1} height="50px" alignItems="center" my={3}>
            {isExclusive && (
              <Text bg="green.4" mr={3} p={3} color="white">
                Exclusive
              </Text>
            )}
            {isSale && (
              <Text bg="red.4" p={3} color="white">
                Sale
              </Text>
            )}
          </Flex>
          <Flex width={1} justifyContent="space-between" alignItems="flex-start">
            <Text
              color="gray.8"
              fontSize={[5, 5, 7, 7]}
              mr={2}
              overflow="hidden"
              css={`
                text-overflow: ellipsis;
              `}
            >
              {productName}
            </Text>
            <Text color="orange.4" fontSize={[5, 5, 7, 7]}>
              {price}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  },
  (prevProps, nextProps) => {
    // Check re-rendering condition
    if (JSON.stringify(prevProps.product) === JSON.stringify(nextProps.product)) {
      return true;
    }

    return false;
  }
);

Product.displayName = 'Product';

export default Product;
