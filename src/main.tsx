import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import "./styles/global.less";
import { useMock } from "./mock/index.js";
// 引入路由对象
import App from "./App";
import store from "./store/index";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
// for date-picker i18n
import "dayjs/locale/zh-cn";

// 使用mock
// useMock();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <App />
        </HashRouter>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
