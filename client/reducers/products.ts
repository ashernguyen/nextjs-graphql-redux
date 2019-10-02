import { Reducer } from 'redux';
import { ProductsState } from '@client/reducers/types';
import { ActionTypes, ProductsActions } from '@client/actions/types';

export const initialState = {
  data: [],
  loading: false,
  error: false,
  sizes: [],
  filteredOptions: {
    size: ''
  }
};

const productsReducer: Reducer<ProductsState, ProductsActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case ActionTypes.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    }

    case ActionTypes.FETCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    case ActionTypes.UPDATE_PRODUCT_SIZES: {
      return {
        ...state,
        sizes: action.payload.sizes
      };
    }

    case ActionTypes.FILTER_PRODUCTS: {
      return {
        ...state,
        filteredOptions: {
          ...state.filteredOptions,
          ...action.payload.filteredOptions
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default productsReducer;
