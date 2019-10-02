import React, { FC, ComponentClass, isValidElement, ReactElement } from 'react';
import { Store } from 'redux';
import { MockedProvider } from 'react-apollo/test-utils';
import { Provider } from 'react-redux';
import { ApolloMockResponse } from './types';
import { buildComponent } from 'tests/helpers';

export const buildContainerWrapper = <P, T>(
  store: Store,
  Container: FC<P> | ComponentClass<P, T> | ReactElement<P>,
  type: string = 'mount',
  clientMock: ApolloMockResponse,
  props: P
) => {
  const content = isValidElement(Container) ? Container : <Container {...props} />;

  const wrapper = (
    <Provider store={store}>
      {clientMock ? (
        <MockedProvider mocks={clientMock} addTypename={false}>
          {content}
        </MockedProvider>
      ) : (
        content
      )}
    </Provider>
  );

  return buildComponent(wrapper, type);
};
