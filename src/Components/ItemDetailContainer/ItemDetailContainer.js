import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

import "./ItemDetailContainer.css"

import ItemDetail from "./ItemDetail/ItemDetail.js"

// import { products } from '../Productos/Productos.js';
// const getProducts = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(products);
// 		}, 10)
// 	})
// }

function ItemDetailContainer() 
{
	const { itemId } = useParams();
	const [productItemDetail, setProductItemDetail] = useState([]);

	// useEffect(() => {
	// 	getProducts()
	// 	.then(respuesta => {

	// 		let product;

	// 		for(let i = 0; i < respuesta.length; i++) {
	// 			if (respuesta[i].id === parseInt(itemId)){
	// 				product = respuesta[i]
	// 			}
	// 		}

	// 		setProductItemDetail(product)

	// 		console.log("Detail Container")
	// 	})
	// 	.catch(err => console.log(err))
	// }, [itemId]);

	useEffect(() => {
		const db = getFirestore();
		const queryCollection = collection(db, "items");
		getDocs(queryCollection).then(respuesta => {
			let products;
			let finalProduct;

			products = respuesta.docs.map(prod => ({id: prod.id, ...prod.data()}));

			for(let i = 0; i < products.length; i++) {
				if (products[i].id === parseInt(itemId)){
					finalProduct = products[i]
				}
			}

			setProductItemDetail(finalProduct)
		})
		.catch(err => console.log(err))
	}, [])

	return (

		<div className="itemDetailContainer">
			<ItemDetail name={productItemDetail.name} 
						price={productItemDetail.price} 
						description={productItemDetail.description}
						id={productItemDetail.id}
						image={productItemDetail.image}
			/> 
		</div>

	)
}

export default ItemDetailContainer