import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { userReducer } from "./reducers/user-reducer";
import { countReducer } from "./reducers/count-reducer";
import { loadingReducer } from "./reducers/loading-reducer";

// combineReducers 模块化
// thunkMiddleware 异步action

const store = createStore(
  combineReducers({
    user: userReducer,
    count: countReducer,
    loading: loadingReducer,
  }),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
