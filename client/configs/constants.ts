import { NavLink } from '@client/types';

export const ITEMS_API_URI = 'https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3';

export const REDUX_STORE_KEY = '__AKQA_CODING_TEST_REDUX_STORE__';

export const GRAPHQL_URI = 'https://akqa-coding-challenge-graphql.ashernguyen.site/graphql';

export const PRODUCT_SIZES_ORDER = ['XS', 'S', 'M', 'L', 'XL'];

export const NAV_LINKS: NavLink[] = [
  {
    label: 'With Redux',
    path: '/'
  },
  {
    label: 'With Graphql',
    path: '/with-graphql'
  }
];
