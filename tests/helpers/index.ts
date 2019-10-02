import { ReactElement, FC, ComponentClass } from 'react';
import thunk from 'redux-thunk';
import createStore from 'redux-mock-store';
import { ShallowWrapper, ReactWrapper, shallow, mount } from 'enzyme';

export const middlewares = [thunk];

export const mockStore = createStore(middlewares);

export const getProps = (wrapper: ShallowWrapper | ReactWrapper, component: FC | ComponentClass) =>
  typeof wrapper === 'string' ? {} : wrapper.find(component).props();

export const getUpdatedProps = (
  wrapper: ShallowWrapper | ReactWrapper,
  component: FC | ComponentClass
) =>
  wrapper
    .update()
    .find(component)
    .props();

export const buildComponent = <P>(
  Component: ReactElement<P>,
  type: string = 'mount'
): ShallowWrapper | ReactWrapper => {
  switch (type) {
    case 'shallow': {
      return shallow(Component);
    }

    default: {
      return mount(Component);
    }
  }
};

export const spyFunc = jest.fn();
