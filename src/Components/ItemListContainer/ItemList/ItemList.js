import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";

import "./ItemList.css"

import Item from "./Item/Item.js"
import { products } from '../../Productos/Productos.js';

const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 500)
	})
}

function ItemList({inCategory}) 
{
	const [productsArray, setProductsArray] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getProducts()
		.then(respuesta => {

			let products = [];

			for(let i = 0; i < respuesta.length; i++) 
			{
				if (respuesta[i].category == inCategory){
					console.log(respuesta[i])
					products.push(respuesta[i]);
				}
			}

			if (products.length == 0)
				setProductsArray(respuesta);
			else
				setProductsArray(products);

			setIsLoading(false)
		})
		.catch(err => console.log(err))
	});

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