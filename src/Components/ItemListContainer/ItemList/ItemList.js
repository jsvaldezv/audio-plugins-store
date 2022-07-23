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
							{/* <NavLink to={`/category/${product.id}`}> 	 */}
								<Item 	title={product.name} 
										price={product.price} 
										category={product.categoria}
										color={product.color}
										id={product.id}/>
							{/* </NavLink> */}
						</li>
					)}
				</ul>
			}
				
		</div>

	)	
}

export default ItemList