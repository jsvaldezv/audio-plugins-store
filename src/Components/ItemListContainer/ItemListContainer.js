import React, { useEffect } from 'react'

import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList.js"

function ItemListContainer({title}) 
{
	return (

		<div className="itemListContainer">

			<ItemList />

		</div>

	)
}

export default ItemListContainer