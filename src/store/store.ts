import {compose, createStore} from "redux";

import rootReducer from "./root.reducer";

const composeEnhancer: typeof compose = (process.env.NODE_ENV !== 'production' && window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer();

export const store = createStore(rootReducer, undefined, composedEnhancers);