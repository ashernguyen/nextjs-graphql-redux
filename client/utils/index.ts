import 'isomorphic-fetch';
import { Product } from '@client/types';
import { PRODUCT_SIZES_ORDER } from '@client/configs/constants';
import {
  ThemeProps,
  FetchAsync,
  FilterProductByOptions,
  GetProductSize,
  GetProductSizes
} from '@client/utils/types';

export const themed = <P>(key: string) => (props: ThemeProps & P) => props.theme[key];

export const fetchAsync: FetchAsync = async uri => {
  let response = await fetch(uri);

  let data = await response.json();

  return data;
};

export const filterProductByOptions: FilterProductByOptions = (products, { size }): Product[] =>
  size.length === 0 ? products : products.filter(product => product.size.includes(size));

export const getProductSizes: GetProductSizes = products =>
  products
    .reduce<string[]>((sizes, { size }) => [...new Set([...sizes, ...size])], [])
    .sort((s1, s2) => PRODUCT_SIZES_ORDER.indexOf(s1) - PRODUCT_SIZES_ORDER.indexOf(s2));

export const getProductSize: GetProductSize = size =>
  typeof size === 'string' && PRODUCT_SIZES_ORDER.includes(size) ? size : '';
