import React, { useState, useEffect } from "react";
import { Link, useRoutes } from "react-router-dom";
import { routes } from "./router/index";
import RouterBefore from "./router/RouterBefore";
import './App.less'

function App() {
  const route = useRoutes(routes);

  return <RouterBefore>{route}</RouterBefore>;
}

export default App;
