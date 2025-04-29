import { Navigate } from "react-router-dom"
import App from "../App"
import About from "../components/About"
import Home from "../components/Home"
import News from "../components/Home/News"
import Message from "../components/Home/Message"
import Detail from "../components/Home/Message/Detail"

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
        element: <Home />,
        children: [
          {
            path: "news",
            element: <News />
          },
          {
            path: "message",
            element: <Message />,
            children:[
              {
                path: "detail/:id/:title/:content",
                element: <Detail/>
              }
            ]
          }
        ]
      }
    ]
  }
] 