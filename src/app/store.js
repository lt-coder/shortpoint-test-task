import { configureStore } from "@reduxjs/toolkit";
import sagaMiddleware from './rootSaga';
import reducer from './rootReducer';

const store = configureStore({
  reducer,
  middleware: [ sagaMiddleware ],
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  });
};

export default store;
