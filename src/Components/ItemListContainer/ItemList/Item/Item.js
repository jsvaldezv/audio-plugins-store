import React from 'react'
import { Link } from "react-router-dom"
import "./Item.css"

import decapitator from "../../../../Assets/plugins/Decapitator.png"

function Item({title, price, color, id}) 
{
	return (

		<div className="item" style={{backgroundColor: color}}>
			<div>
				<div>
					<h2>{title}</h2>
					<h3>$ {price}</h3>
				</div>
				{/* <img src={decapitator}/> */}
			</div>
			<Link to={`/item/${id}`}> <h3> Detail </h3> </Link>
		</div>

	)
}

export default Item