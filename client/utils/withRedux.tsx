import React, { Component } from 'react';
import { AppStore } from '@client/types';
import { InitStoreOptions, WrapperProps, NextAppContext, WithRedux } from '@client/utils/types';
import { REDUX_STORE_KEY } from '@client/configs/constants';

const withRedux: WithRedux = createStore => {
  const isServer = typeof window === 'undefined';

  const initStore = ({ initialState = {} }: InitStoreOptions): AppStore => {
    const generateStore = () => createStore(initialState);

    if (isServer) {
      return generateStore();
    }

    if (!Object.prototype.hasOwnProperty.call(window, REDUX_STORE_KEY)) {
      window[REDUX_STORE_KEY] = generateStore();
    }

    return window[REDUX_STORE_KEY];
  };

  return App =>
    class Wrapper extends Component<WrapperProps> {
      public static displayName = `withRedux(${App.name || 'App'})`;

      static async getInitialProps(wrapperContext: NextAppContext) {
        if (!wrapperContext) {
          throw new Error('No app context');
        }

        if (!wrapperContext.ctx) {
          throw new Error('No page context');
        }

        const store = initStore({
          initialState: {},
          ctx: wrapperContext.ctx
        });

        wrapperContext.ctx.store = store;

        wrapperContext.ctx.isServer = isServer;

        let initialProps = {};

        if (App.getInitialProps) {
          initialProps = await App.getInitialProps.call(App, wrapperContext);
        }

        return {
          isServer,
          initialState: store.getState(),
          initialProps
        };
      }

      constructor(props: WrapperProps) {
        super(props);

        const { initialState } = props;

        this.store = initStore({
          initialState
        });
      }

      protected store: AppStore;

      render() {
        const { initialProps, ...rest } = this.props;

        return <App {...rest} {...initialProps} store={this.store} />;
      }
    };
};

export default withRedux;
