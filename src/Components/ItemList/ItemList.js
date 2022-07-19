import React from 'react'
import "./ItemList.css"

import Item from "./Item/Item.js"
import { products } from './Productos.js';

function ItemList() 
{
	return (

		<div className="itemList">
			
			<ul>
				{products.map(product => 
					<li key={product.id}> 
						<Item title={product.name} price={product.price} category={product.categoria}/> 
					</li>
				)}
			</ul>
				
		</div>

	)	
}

export default ItemList