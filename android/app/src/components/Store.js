// src/components/Store.js

import { combineReducers, legacy_createStore as createStore } from 'redux';
import coursesReducer from './reducers/TaskReducer';

const ConfigureStore = () => {
  const rootReducer = combineReducers({
    courses: coursesReducer,
  });

  return createStore(rootReducer);
};

export default ConfigureStore;
