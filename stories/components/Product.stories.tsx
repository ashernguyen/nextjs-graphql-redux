import React from 'react';
import { storiesOf } from '@storybook/react';
import Product from '@client/components/product';
import ProductPlaceholder from '@client/components/product/Placeholder';

const stories = storiesOf('Components|Product', module);

stories
  .addWithJSX('Default', () => (
    <Product
      width={1}
      maxWidth="360px"
      product={{
        index: 0,
        isSale: false,
        isExclusive: false,
        price: '$18.88',
        productImage: 'product-1.jpg',
        productName: 'Striped shirt',
        size: ['XS', 'S', 'L', 'XL']
      }}
    />
  ))
  .addWithJSX('Sale tag', () => (
    <Product
      width={1}
      maxWidth="360px"
      product={{
        index: 0,
        isSale: true,
        isExclusive: false,
        price: '$18.88',
        productImage: 'product-1.jpg',
        productName: 'Striped shirt',
        size: ['XS', 'S', 'L', 'XL']
      }}
    />
  ))
  .addWithJSX('Exclusive tag', () => (
    <Product
      width={1}
      maxWidth="360px"
      product={{
        index: 0,
        isSale: false,
        isExclusive: true,
        price: '$18.88',
        productImage: 'product-1.jpg',
        productName: 'Striped shirt',
        size: ['XS', 'S', 'L', 'XL']
      }}
    />
  ))
  .addWithJSX('Loading Placeholder', () => <ProductPlaceholder width={1} maxWidth="360px" />);
