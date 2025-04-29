import React from 'react'
import {NavLink, Outlet} from "react-router-dom"
import '../../styles/nav.css'

export default function Home() {
  return (
    <div>
      <h3 className="mb-4">Home 组件</h3>
      <div>
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <NavLink 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
              to="news"
            >
              News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link"
              }
              to="message"
            >
              Message
            </NavLink>
          </li>
        </ul>
        <div className="mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
