import { Product } from '@client/types';
import { FilteredOptions } from '@client/reducers/types';

export interface ProductsListProps {
  products: Product[];
  sizes: string[];
  loading: boolean;
  error: boolean;
  filteredOptions: FilteredOptions;
  setFilteredOptions: (filteredOptions: FilteredOptions) => void;
}

export type FilteredOptionsProps = Pick<
  ProductsListProps,
  'sizes' | 'filteredOptions' | 'setFilteredOptions'
>;
