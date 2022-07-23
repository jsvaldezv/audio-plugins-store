import React from 'react'
import "./ItemDetail.css"

import ItemCount from "../../ItemCount/ItemCount.js"

function ItemDetail({name, description, price}) 
{
	return (
		<div className="itemDetail">
			<h2>{name}</h2>
			<h3>{price}</h3>
			<p>{description}</p>
			<ItemCount stock={5} initial={1}/>
		</div>
	)
}

export default ItemDetail