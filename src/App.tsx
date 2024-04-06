import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {BrowserRouter as Router, createBrowserRouter, redirect, Route} from 'react-router-dom';
import {RouterProvider} from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/:id",
        element: <div>Id</div>,
    },
], {
    basename: 'test'
});

export function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
