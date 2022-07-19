import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar.js"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js"

import { products } from './Components/Productos/Productos.js';

const getProducts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 2000)
	})
}

function App() 
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

		<div className="App">

			<NavBar />

			{/* <ItemListContainer title={"Contador"}/> */}

			<ItemDetailContainer inProducts={productsArray}/>

		</div>
		
	);
}

export default App;