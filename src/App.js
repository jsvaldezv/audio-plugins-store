import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

// Components
import NavBar from "./Components/NavBar/NavBar.js"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js"

function App() 
{
	return (

		<BrowserRouter>

			<NavBar />

			<Routes>

				<Route exact path="/" element={<ItemListContainer />}/>
				<Route exact path="/category/:id" element={<ItemListContainer title={"Contador"}/>}/>
				<Route exact path="/item/:itemId" element={<ItemDetailContainer />}/>

			</Routes>

		</BrowserRouter>
		
	);
}

export default App;