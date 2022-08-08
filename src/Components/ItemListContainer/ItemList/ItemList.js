import React from 'react'

import "./ItemList.css"
import Item from "./Item/Item.js"

function ItemList({inProducts, loading}) 
{
	return (

		<div className="itemList">
			
			{ loading ?
				<div className="itemList-loading"> <h2>Loading...</h2>  </div>	
				: 
				<ul>
					{inProducts.map(product => 
						<li key={product.id}> 
							<Item 	title={product.name} 
									price={product.price}
									color={product.color}
									id={product.id}/>
						</li>
					)}
				</ul>
			}
				
		</div>

	)	
}

export default ItemList