import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';

export const Router_app = () => {

    let router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='' element={<Login />} />
                <Route path='dashboard' element={<Dashboard />} />
            </Route>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
