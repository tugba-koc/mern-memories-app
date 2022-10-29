import { legacy_createStore as createStore} from 'redux'
import { combineReducers, compose } from 'redux';
import postReducer from './post/postReducer';

const reducers = combineReducers({
  postReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers());

export default store;
