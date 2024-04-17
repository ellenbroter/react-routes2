import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import styles from '../App.module.css'

const Wrapper = () => {
  return (
	<>
		<nav className={styles.navbar}>
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