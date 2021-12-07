import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, notAuthRoutes } from "../routes";
import Home from "./Home";
import { IsAuthContext } from "../context";

const Routing = () => {
  const { isAuth } = useContext(IsAuthContext);
  return (
    <BrowserRouter>
      {isAuth ? (
        <Routes>
          <Route path="/" element={<Home />} />
          {authRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          {notAuthRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Routing;
