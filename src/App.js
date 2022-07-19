import './App.css';

import NavBar from "./Components/NavBar/NavBar.js"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js"

function App() {
  return (

    <div className="App">
		<NavBar />
		<ItemListContainer title={"Contador"}/>
    </div>
	
  );
}

export default App;