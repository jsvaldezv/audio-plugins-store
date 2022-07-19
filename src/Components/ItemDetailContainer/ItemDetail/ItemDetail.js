import React from 'react'
import "./ItemDetail.css"

function ItemDetail({name, description, price}) 
{
	return (
		<div className="itemDetail">
			<h2>{name}</h2>
			<h3>{price}</h3>
			<p>{description}</p>
		</div>
	)
}

export default ItemDetail