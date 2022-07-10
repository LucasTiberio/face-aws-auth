import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RouteAndRedirect } from '../types/router';
import routes from './routes';

const Router: React.FC = () => {
    const isAuthenticated = false;

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(
                    (_route, index): React.ReactNode => {
                        const {
                            redirect,
                            to,
                            component: Component,
                            authenticated: authenticatedRoute,
                            path,
                            ...props
                        } = _route as RouteAndRedirect
                        if (redirect && to) {
                            return null;
                        }

                        const RouteComponent = <Route
                            element={<Component {...props} />}
                            path={path}
                            key={`route-item-${index}`}
                        />

                        if (authenticatedRoute) {
                            if (isAuthenticated) {
                                return RouteComponent
                            } else {
                                return null;
                            }
                        }

                        return RouteComponent;
                    },
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;