import React from 'react'
import { Link } from "react-router-dom"
import "./Item.css"

function Item({title, price, color, id, image}) 
{
	return (

		<div className="item" style={{backgroundColor: color}}>
			<div>
				<h2>{title}</h2>
				<h3>$ {price}</h3>
				<img src={image}/>
			</div>
			<Link to={`/item/${id}`}> <h3> More </h3> </Link>
		</div>

	)
}

export default Item