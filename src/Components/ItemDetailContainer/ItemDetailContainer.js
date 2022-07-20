import React, { useState, useEffect } from 'react'
import "./ItemDetailContainer.css"

import ItemDetail from "./ItemDetail/ItemDetail.js"

import { products } from '../Productos/Productos.js';

const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 2000)
	})
}

function ItemDetailContainer() 
{
	const [productsArray, setProductsArray] = useState([]);

	useEffect(() => {
		getProducts()
		.then(respuesta => {
			setProductsArray(respuesta)
		})
		.catch(err => console.log(err))
	}, []);

	return (

		<div className="itemDetailContainer">
			{productsArray.map(product => 
					<ItemDetail name={product.name} price={product.price} description={product.categoria}/> 
			)}
		</div>

	)
}

export default ItemDetailContainer