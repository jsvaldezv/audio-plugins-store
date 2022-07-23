import React from 'react';
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css"

import Logo from './Logo/Logo.js'
import Cart from './Cart/Cart.js'

function NavBar() 
{
	return (

		<div className="navBar">

			<Link to={"/"}> <Logo /> </Link>

			<ul>
				<Link to={"/"}> <li className="navBar-li">Home</li> </Link>
				<NavLink to={`/shop/${""}`}> <li className="navBar-li">Shop</li> </NavLink>
				<NavLink to={`/contact/${""}`}> <li className="navBar-li">Contact</li> </NavLink>
				<NavLink to={`/us/${""}`}> <li className="navBar-li">Us</li> </NavLink>
				<NavLink to={`/account/${""}`}> <li className="navBar-li">Account</li> </NavLink>
				<Cart />
			</ul>

		</div>
	)
}

export default NavBar