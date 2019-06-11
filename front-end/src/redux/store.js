import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";
import { connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import reducers from "../redux/reducers";

const history = createHistory();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: connectRouter(history)
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export { store, history };
