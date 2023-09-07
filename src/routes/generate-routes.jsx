import flattenDeep from "lodash/flattenDeep";
import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const generateFlattenRoutes = (routes) => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

export const renderRoutes = (mainRoutes) => {
  const Routes = ({ isAuthorized }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);

      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map(
            ({
              component: Component,
              path,
              name,
              isAuthorized: routeAuth,
              isPublic,
            }) => {
              // Yetkilendirme gerektiren rotalar için kontrol

              // Herkese açık rotalar için kontrol
              if (isPublic) {
                return (
                  Component &&
                  path && (
                    <Route key={name} element={<Component />} path={path} />
                  )
                );
              }

              // Diğer tüm rotaları yetkilendirilmiş kullanıcılara göster
              if (isAuthorized) {
                return (
                  Component &&
                  path && (
                    <Route key={name} element={<Component />} path={path} />
                  )
                );
              } else {
                return (
                  <Route key={index} element={<Layout />}>
                    <Route
                      element={<ProtectedRoute isAuthorized={isAuthorized} />}
                    >
                      {subRoutes.map(({ component: Component, path, name }) => {
                        return (
                          Component &&
                          path && (
                            <Route
                              key={name}
                              element={<Component />}
                              path={path}
                            />
                          )
                        );
                      })}
                    </Route>
                  </Route>
                );
              }

              return null; // Diğer durumlar için herhangi bir rota gösterme
            }
          )}
        </Route>
      );
    });
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};
