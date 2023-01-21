import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                
                <NavLink 
                    className={(props)=>`nav-link ${props.isActive ? 'active' : ''}` }
                    to="/">
                    Home
                </NavLink>

                <NavLink 
                    // Otra forma de ver la propiedad isActive
                    className={({isActive})=>`nav-link ${isActive ? 'active' : ''}` }
                    to="/about">
                    about
                </NavLink>

                <NavLink                     
                    className={({isActive})=>`nav-link ${isActive ? 'active' : ''}` }
                    to="/login">
                    login
                </NavLink>

                                             
            </ul>
            </div>
        </div>
        </nav>
  )
}
