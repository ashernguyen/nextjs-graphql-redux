import { FilteredOptions } from '@client/reducers/types';
import { Product } from '@client/types';

export interface InputProps {
  filteredOptions: FilteredOptions;
  setFilteredOptions: (filteredOptions: FilteredOptions) => void;
}

export interface Response extends InputProps {
  products: Product[];
  sizes: string[];
  loading: boolean;
}

export interface Variables extends Pick<InputProps, 'filteredOptions'> {}

export type ChildProps = InputProps & Response;
