import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"

import ItemDetail from "./ItemDetail/ItemDetail.js"
import { products } from '../Productos/Productos.js';

const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 500)
	})
}

function ItemDetailContainer() 
{
	const [productArray, setProductArray] = useState([]);
	const { itemId } = useParams();

	useEffect(() => {
		getProducts()
		.then(respuesta => {

			let product;

			for(let i = 0; i < respuesta.length; i++) {
				if (respuesta[i].id == itemId){
					product = respuesta[i]
				}
			}

			setProductArray(product)
		})
		.catch(err => console.log(err))
	}, []);

	useEffect(() => {
		
	}, [itemId])

	return (

		<div className="itemDetailContainer">
			<ItemDetail name={productArray.name} price={productArray.price} description={productArray.categoria}/> 
		</div>

	)
}

export default ItemDetailContainer