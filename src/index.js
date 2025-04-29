import React from "react";
import {createRoot} from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from "./router"

const browserRouter = createBrowserRouter(router)

const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
)