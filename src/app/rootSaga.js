import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import notesSaga from '../containers/Notes/saga';

function* rootSaga() {
  yield all(
    [ 
      fork(notesSaga),
    ]
  );
};

const sagaMiddleware = createSagaMiddleware();

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default sagaMiddleware;
