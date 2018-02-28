import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers';
const middleware = [ thunk ];

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );
}
