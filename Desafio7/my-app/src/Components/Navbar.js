// 2 aula sobre links com react router 

import "./Navbar.css"

import {Link, NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/About">Sobre</Link> */}

      <NavLink
        className={({ isActive }) => (isActive ? 'active' : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : undefined)}
        to="/about"
      >
        Sobre
      </NavLink>
    </nav>
  )
}

export default Navbar