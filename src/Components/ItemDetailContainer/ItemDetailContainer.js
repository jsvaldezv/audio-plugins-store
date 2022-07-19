import React from 'react'
import "./ItemDetailContainer.css"

import ItemDetail from "./ItemDetail/ItemDetail.js"

function ItemDetailContainer({inProducts}) 
{
	return (

		<div className="itemDetailContainer">
			{inProducts.map(product => 
					<ItemDetail name={product.name} price={product.price} description={product.categoria}/> 
			)}
		</div>

	)
}

export default ItemDetailContainer