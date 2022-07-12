import React from 'react'
import "./ItemListContainer.css"

function ItemListContainer({title}) 
{
	return (
		<div className="itemListContainer">
			<h1>{title}</h1>
		</div>
	)
}

export default ItemListContainer