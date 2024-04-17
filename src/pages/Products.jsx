import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {
  return (
	<>
		<div>Products</div>
		<div>Click on the link to see the latest products <NavLink to="latest-products">Latest products</NavLink></div>
		<Outlet />
	</>
  )
}

export default Products