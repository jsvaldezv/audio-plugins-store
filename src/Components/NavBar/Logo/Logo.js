import React from 'react'
import "./Logo.css"

import logoEar from "../../../Assets/logo.png"

function Logo() 
{
	return (
		<div className="cardWidget">
			<img src={logoEar}></img>
		</div>
	)
}

export default Logo