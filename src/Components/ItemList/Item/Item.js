import React from 'react'
import "./Item.css"

function Item({title, price, category}) 
{
	return (

		<div className="item">
			<h2>{title}</h2>
			<h3>$ {price}</h3>
			<h3>{category}</h3>
		</div>

	)
}

export default Item