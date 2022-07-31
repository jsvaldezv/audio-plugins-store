import React, { useState } from 'react'
import "./ItemCount.css"

function ItemCunt({stock, initial, onAdd}) 
{
	const [count, setCount] = useState(initial);
	
	const lessOperation = () => {
		if (count > initial)
			setCount(count - 1);
	}

	const plusOperation = () => {
		if (count < stock)
			setCount(count + 1);
	}

	const addToCart = () => {
		onAdd(count)
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