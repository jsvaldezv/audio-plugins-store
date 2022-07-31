import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

// Components
import CartContextProvider from "./Contexts/CartContext.js"
import CartUser from "./Components/CartUser/CartUser.js"
import NavBar from "./Components/NavBar/NavBar.js"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js"

function App() 
{
	return (

		<BrowserRouter>

			<CartContextProvider>
				<div>
				<NavBar />
				<Routes>
					<Route exact path="/" element={<ItemListContainer />}/>
					<Route exact path="/category/:categoryId" element={<ItemListContainer title={"Contador"}/>}/>
					<Route exact path="/item/:itemId" element={<ItemDetailContainer />}/>
					<Route exact path="/cart" element={<CartUser />}/>
				</Routes>
				</div>
			</CartContextProvider>

		</BrowserRouter>
		
	);
}

export default App;