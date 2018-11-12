import { createStore, applyMiddleware, compose } from "redux";

const middleware: any[] = [];

const composeEnhancers =
  // TS complains about adding things to the window object
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state: any) => state;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
