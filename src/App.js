import React from 'react'
import {NavLink, Outlet} from "react-router-dom"


export default function App() {
  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="border-bottom pb-2">React Router Demo</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <NavLink 
              className={({isActive}) => 
                isActive ? "list-group-item active" : "list-group-item"
              } 
              to="/about"
            >
              About
            </NavLink>
            <NavLink 
              className={({isActive}) => 
                isActive ? "list-group-item active" : "list-group-item"
              } 
              to="/home"
            >
              Home
            </NavLink>
			
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
