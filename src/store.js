import { applyMiddleware, compose, createStore } from 'redux'

import thunk from 'redux-thunk';// para fazer requisições assincronas. 

import rootReducers from './reducers'

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(thunk);

const store = createStore(rootReducers, compose(middleware, composeEnhacers));

export default store;