import React from 'react'
import "./NavBar.css"

import logo from "../../Assets/logo.png"

function NavBar() 
{
	return (

		<div className="navBar">

			<img src={logo}/>

			<ul>
				<li>Home</li>
				<li>Shop</li>
				<li>Contact</li>
				<li>Us</li>
			</ul>

			<div>
				Account
			</div>

		</div>
	)
}

export default NavBar