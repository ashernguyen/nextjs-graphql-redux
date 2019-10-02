import reducer, { initialState } from '@client/reducers/products';
import { ActionTypes, Actions } from '@client/actions/types';
import data from 'tests/__mocks__/product';

describe('@client/reducers/products', () => {
  describe(`${ActionTypes.FETCH_PRODUCTS_REQUEST} action`, () => {
    test('it should return initial state', () => {
      expect(reducer(undefined, {} as Actions)).toEqual(initialState); //eslint-disable-line
    });

    test('it should return new state', () => {
      expect(
        reducer(initialState, {
          type: ActionTypes.FETCH_PRODUCTS_REQUEST
        })
      ).toEqual({
        ...initialState,
        loading: true
      });
    });
  });

  describe(`${ActionTypes.FETCH_PRODUCTS_SUCCESS} action`, () => {
    test('it should return initial state', () => {
      expect(reducer(initialState, {} as Actions)).toEqual(initialState); //eslint-disable-line
    });

    test('it should return new state', () => {
      expect(
        reducer(initialState, {
          type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
          payload: { data }
        })
      ).toEqual({
        ...initialState,
        data
      });
    });
  });

  describe(`${ActionTypes.FETCH_PRODUCTS_FAILURE} action`, () => {
    test('it should return initial state', () => {
      expect(reducer(initialState, {} as Actions)).toEqual(initialState); //eslint-disable-line
    });

    test('it should return new state', () => {
      expect(
        reducer(initialState, {
          type: ActionTypes.FETCH_PRODUCTS_FAILURE
        })
      ).toEqual({
        ...initialState,
        error: true
      });
    });
  });

  describe(`${ActionTypes.UPDATE_PRODUCT_SIZES} action`, () => {
    test('it should return initial state', () => {
      expect(reducer(initialState, {} as Actions)).toEqual(initialState); //eslint-disable-line
    });

    test('it should return new state', () => {
      expect(
        reducer(initialState, {
          type: ActionTypes.UPDATE_PRODUCT_SIZES,
          payload: { sizes: ['M'] }
        })
      ).toEqual({
        ...initialState,
        sizes: ['M']
      });
    });
  });

  describe(`${ActionTypes.FILTER_PRODUCTS} action`, () => {
    test('it should return initial state', () => {
      expect(reducer(initialState, {} as Actions)).toEqual(initialState); //eslint-disable-line
    });

    test('it should return new state', () => {
      expect(
        reducer(initialState, {
          type: ActionTypes.FILTER_PRODUCTS,
          payload: { filteredOptions: { size: 'L' } }
        })
      ).toEqual({
        ...initialState,
        filteredOptions: {
          size: 'L'
        }
      });
    });
  });
});
