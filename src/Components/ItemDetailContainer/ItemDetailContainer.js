import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css"

import ItemDetail from "./ItemDetail/ItemDetail.js"
import { products } from '../Productos/Productos.js';

const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 10)
	})
}

function ItemDetailContainer() 
{
	const { itemId } = useParams();
	const [productItemDetail, setProductItemDetail] = useState([]);

	useEffect(() => {
		getProducts()
		.then(respuesta => {

			let product;

			for(let i = 0; i < respuesta.length; i++) {
				if (respuesta[i].id === parseInt(itemId)){
					product = respuesta[i]
				}
			}

			setProductItemDetail(product)
		})
		.catch(err => console.log(err))
	}, []);

	return (

		<div className="itemDetailContainer">
			<ItemDetail name={productItemDetail.name} 
						price={productItemDetail.price} 
						description={productItemDetail.category}
						id={productItemDetail.id}
			/> 
		</div>

	)
}

export default ItemDetailContainer