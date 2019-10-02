import { Product } from '@client/types';
export interface FilteredOptions {
  size: string;
}

export interface ProductsState {
  readonly data: Product[];
  readonly sizes: string[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly filteredOptions: FilteredOptions;
}

export interface ApplicationState {
  readonly products?: ProductsState;
}
