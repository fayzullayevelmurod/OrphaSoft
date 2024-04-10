import { Routes, Route } from "react-router-dom";
import routes from "./routes";

export const App = () => {
  return (
    <>
      <Routes>
        <Route>
          {routes.map((route, index) => {
            const { path, component: Component } = route;
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </>
  );
};
