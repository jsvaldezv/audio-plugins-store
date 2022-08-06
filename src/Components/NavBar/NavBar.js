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
				<NavLink to={`/category/${"distortion"}`}> <li className="navBar-li">Distortion</li> </NavLink>
				<NavLink to={`/category/${"reverb"}`}> <li className="navBar-li">Reverb</li> </NavLink>
				<NavLink to={`/category/${"delay"}`}> <li className="navBar-li">Delay</li> </NavLink>
				<NavLink to={`/category/${"granular"}`}> <li className="navBar-li">Granular</li> </NavLink>

				<Link to={"/cart"}><Cart/></Link>
			</ul>

		</div>
	)
}

export default NavBar