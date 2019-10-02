import { MockedResponse } from 'react-apollo/test-utils';
import { Product } from '@client/types';

export type ApolloMockResponse = MockedResponse[];

export interface ProductProps {
  data: Product;
}
