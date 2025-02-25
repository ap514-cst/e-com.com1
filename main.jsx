import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Man from "./Componat/Card/Shop";

import Login from "./Componat/LoginPage/Login";
import Populer from "./Componat/Populer/Populer";

import Terminal_1 from "./Componat/Card/Terminal_1"
import Terminal_2 from "./Componat/Card/Terminal_2"
import Terminal_3 from "./Componat/Card/Terminal_3"
import Card from "./Card-count/Card";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
          path:'',
          element:<Man/>
        },
        {
            path:'/terminal_1',
            element:<Terminal_1/>
        },
        {
            path:'/terminal_2',
            element:<Terminal_2/>
        },
        {
            path:'/terminal_3',
            element:<Terminal_3/>
        }

    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/populer',
    element:<Populer/>
  }
  
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);