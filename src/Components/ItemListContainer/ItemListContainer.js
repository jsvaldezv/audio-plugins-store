import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query } from "firebase/firestore";

import "./ItemListContainer.css"

import ItemList from "./ItemList/ItemList.js"

function ItemListContainer() 
{
	const { categoryId } = useParams();

	const [productsArray, setProductsArray] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {

		const db = getFirestore();
		const queryCollection = collection(db, "items");
		
		getDocs(queryCollection).then(respuesta => {
			let products = [];
			let finalProducts = [];

			products = respuesta.docs.map(prod => ({id: prod.id, ...prod.data()}));

			for(let i = 0; i < products.length; i++) 
			{
				if (products[i].category === categoryId){
					finalProducts.push(products[i]);
				}
			}

			if (finalProducts.length === 0)
				setProductsArray(products);
			else
				setProductsArray(finalProducts);

			setIsLoading(false)
		})
		.catch(err => console.log(err))
	}, [categoryId])

	return (

		<div className="itemListContainer">

			<ItemList inProducts={productsArray} loading={isLoading}/>

		</div>

	)
}

export default ItemListContainer