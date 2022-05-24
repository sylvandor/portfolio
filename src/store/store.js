import {compose, createStore} from "redux";

import rootReducer from "./root.reducer";

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhancer();

export const store = createStore(rootReducer, undefined, composedEnhancers);