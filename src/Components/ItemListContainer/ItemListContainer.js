import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"

import ItemCount from "../ItemCount/ItemCount.js"
import ItemList from "../ItemList/ItemList.js"

import { products } from '../ItemList/Productos.js';

const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 2000)
	})
}

function ItemListContainer({title}) 
{
	const [productsArray, setProductsArray] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProducts()
		.then(respuesta => {
			setProductsArray(respuesta)
			setLoading(false)
		})
		.catch(err => console.log(err))
	}, []);

	return (

		<div className="itemListContainer">

			<h1>{title}</h1>

			<ItemCount stock={5} initial={1}/>

			<ItemList products={productsArray} isLoading={loading}/>

		</div>

	)
}

export default ItemListContainer