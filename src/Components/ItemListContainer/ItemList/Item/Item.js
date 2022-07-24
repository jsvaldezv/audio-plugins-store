import React from 'react'
import { Link } from "react-router-dom"
import "./Item.css"

function Item({title, price, color, id}) 
{
	return (

		<div className="item" style={{backgroundColor: color}}>
			<h2>{title}</h2>
			<h3>$ {price}</h3>
			<Link to={`/item/${id}`}> <h3> Detail </h3> </Link>
		</div>

	)
}

export default Item