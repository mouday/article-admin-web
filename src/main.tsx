import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles/global.less";
import { useMock } from "./mock/index.js";
// 引入路由对象
import App from "./App";
import store from "./store/index";

// 使用mock
// useMock();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
