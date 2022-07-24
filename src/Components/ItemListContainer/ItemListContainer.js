import React from 'react'
import { useParams } from "react-router-dom";

import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList.js"

function ItemListContainer() 
{
	const { categoryId } = useParams();

	return (

		<div className="itemListContainer">

			<ItemList inCategory={categoryId}/>

		</div>

	)
}

export default ItemListContainer