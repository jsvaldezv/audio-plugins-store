import React from 'react'
import "./ItemList.css"

import Item from "./Item/Item.js"

function ItemList({products, isLoading}) 
{
	return (

		<div className="itemList">
			
			{ isLoading ?
				<h2>Loading...</h2> 
				: 
				<ul>
					{products.map(product => 
						<li key={product.id}> 
							<Item 	title={product.name} 
									price={product.price} 
									category={product.categoria}
									color={product.color}/> 
						</li>
					)}
				</ul>
			}
				
		</div>

	)	
}

export default ItemList