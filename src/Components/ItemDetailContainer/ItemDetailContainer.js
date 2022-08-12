import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

import "./ItemDetailContainer.css"

import ItemDetail from "./ItemDetail/ItemDetail.js"

function ItemDetailContainer() 
{
	const { itemId } = useParams();
	const [productItemDetail, setProductItemDetail] = useState([]);

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
			
			if (finalProduct === undefined)
				setProductItemDetail(0);
			else
				setProductItemDetail(finalProduct)
		})
		.catch(err => console.log(err))
	}, [])

	return (

		<div className="itemDetailContainer">
			{ 	
				productItemDetail === 0 ?
				<h1>No existe este producto</h1>
				: 
				<ItemDetail name={productItemDetail.name} 
				price={productItemDetail.price} 
				description={productItemDetail.description}
				id={productItemDetail.id}
				image={productItemDetail.image}	/> 
			}
		</div>

	)
}

export default ItemDetailContainer