import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar.js"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js"

function App() 
{
	return (

		<div className="App">

			<NavBar />

			{/* <ItemListContainer title={"Contador"}/> */}

			<ItemDetailContainer />

		</div>
		
	);
}

export default App;