import { Link, useRoutes, use } from "react-router-dom";
import { routes } from "./router/index";
import RouterBefore from "./router/RouterBefore";

function App() {
  const route = useRoutes(routes);

  return <RouterBefore>{route}</RouterBefore>;
}

export default App;
