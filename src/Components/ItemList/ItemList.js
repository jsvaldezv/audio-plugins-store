import React, { useEffect, useState } from 'react'
import "./ItemList.css"

import Item from "./Item/Item.js"
import { products } from './Productos.js';

const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 2000)
	})
}

function ItemList() 
{
	const [productsArray, setProductsArray] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getProducts()
		.then(respuesta => {
			setProductsArray(respuesta)
			setIsLoading(false)
		})
		.catch(err => console.log(err))
	}, []);

	return (

		<div className="itemList">
			
			{ isLoading ?
				<h2>Loading...</h2> 
				: 
				<ul>
					{productsArray.map(product => 
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