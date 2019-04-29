import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './rootReducer';

interface StoreConfig {
    initialState: Record<string, any>;
    middleware: any;
}

export function configureStore(config: StoreConfig = { initialState: {}, middleware: [] }): Store {
    const { initialState, middleware } = config;

    const composeEnhancers = composeWithDevTools({
        actionsBlacklist: [],
    });

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...[thunk].concat(...middleware)))
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./rootReducer', () =>
                store.replaceReducer(require('./rootReducer').default)
            );
        }
    }

    return store;
}

export default configureStore;
