import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { firebaseConnection } from "./Firebase/config"

// Components
import CartContextProvider from "./Contexts/CartContext.js"
import CartUser from "./Components/CartUser/CartUser.js"
import NavBar from "./Components/NavBar/NavBar.js"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js"
import Thanks from "./Components/Thanks/Thanks.js"

firebaseConnection();

function App() 
{
	return (

		<BrowserRouter>

			<CartContextProvider>
					<NavBar />
					<Routes>
						<Route exact path="/" element={<ItemListContainer />}/>
						<Route exact path="/category/:categoryId" element={<ItemListContainer title={"Contador"}/>}/>
						<Route exact path="/item/:itemId" element={<ItemDetailContainer />}/>
						<Route exact path="/cart" element={<CartUser />}/>
						<Route exact path="/thanks/:orderId" element={<Thanks />}/>
					</Routes>
			</CartContextProvider>

		</BrowserRouter>
		
	);
}

export default App;