import React from 'react'
import "./NavBar.css"

import Logo from './Logo/Logo.js'
import Cart from './Cart/Cart.js'

function NavBar() 
{
	return (

		<div className="navBar">

			<Logo />

			<ul>
				<li className="navBar-li">Home</li>
				<li className="navBar-li">Shop</li>
				<li className="navBar-li">Contact</li>
				<li className="navBar-li">Us</li>
				<li className="navBar-li">Account</li>
				<Cart />
			</ul>

		</div>
	)
}

export default NavBar