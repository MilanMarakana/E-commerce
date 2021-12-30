// import { createStore, applyMiddleware } from 'redux';
// import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';

// import rootReducer from './root-reducer';

// const middleWare = [logger];

// export const store = createStore(rootReducer, applyMiddleware(...middleWare));

// export const persistor = persistStore(store);

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { store, persistor };

import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistStore };
