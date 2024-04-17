import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const Wrapper = () => {
  return (
	<>
		<nav>
			<NavLink to="/">HOME</NavLink>
			<NavLink to="/about">ABOUT</NavLink>
			<NavLink to="/products">PRODUCTS</NavLink>
			<NavLink to="/contact">CONTACT</NavLink>
		</nav>
		<div><Outlet /></div>
	</>
  )
}

export default Wrapper