import { Navigate } from "react-router-dom"
import App from "../App"
import About from "../components/About"
import Home from "../components/Home"

export const router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/about" replace />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "home",
        element: <Home />
      }
    ]
  }
] 