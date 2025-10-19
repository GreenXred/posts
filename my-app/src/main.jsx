import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: loadRootData,
    children: [
      {
        path: "posts",
        element: <Posts />
      }
    ]
  },
]);

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
