import React from 'react'
import "./ItemListContainer.css"

import ItemCount from "../ItemCount/ItemCount.js"
import ItemList from "./ItemList/ItemList.js"

function ItemListContainer({title}) 
{
	return (

		<div className="itemListContainer">

			<h1>{title}</h1>

			<ItemCount stock={5} initial={1}/>

			<ItemList />

		</div>

	)
}

export default ItemListContainer