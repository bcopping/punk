import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from "redux-saga";
import root from "../sagas/index";
import rootReducer from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["beverages"],
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(root);

export default store;
export const persistor = persistStore(store);
