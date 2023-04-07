import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddUser from './addUser';
import UpdateUser from './UpdateUser';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import AddProduct from './addProduct';
import UpdateProduct from './updateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //todo add error element

    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/addproduct",
      element: <AddProduct />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Logout",
      element: <Logout />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      element: <UpdateProduct />,
      path: "/update/:id",
      
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
