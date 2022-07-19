import React, { useState } from 'react'
import "./ItemCount.css"

function ItemCunt({stock, initial, addCart}) 
{
	const [count, setCount] = useState(initial);
	
	const lessOperation = () => {
		if (count > 1)
			setCount(count - 1);
	}

	const plusOperation = () => {
		if (count < stock)
			setCount(count + 1);
	}

	const addToCart = () => {
		console.log("Productos en carrito:", count);
	}

	return (
		<div className="itemCount">
			<div>
				<p onClick={lessOperation}> - </p>
				<h3>{count}</h3>
				<p onClick={plusOperation}> + </p>
			</div>
			<div onClick={addToCart} className="itemCountAdd">Agregar a carrito</div>
		</div>
	)
}

export default ItemCunt