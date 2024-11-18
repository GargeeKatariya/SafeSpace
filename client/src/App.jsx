import {  Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import FallbackLoading from "./components/loader/FallbackLoading";
import { publicRoutes, privateRoutes } from "./routes";

import PrivateRoute from "./PrivateRoute";
import SignIn from "./pages/SignIn";

const App = () => {
  const userData = useSelector((state) => state.auth?.userData);

  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        <Route element={<PrivateRoute userData={userData} />}>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route
          path="/signin"
          element={userData ? <Navigate to="/" /> : <SignIn />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
