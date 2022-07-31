import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./ItemDetail.css"

import ItemCount from "../../ItemCount/ItemCount.js"

function ItemDetail({name, description, price}) 
{
	const [showItemCount, setShowItemCount] = useState(true);
	const [cartCount, setCartCount] = useState(0);

	const onAdd = (cant) => {
		setCartCount(cant);
		setShowItemCount(false);
	}

	useEffect(() => {
		console.log("Cantidad:", cartCount);
	}, [cartCount])

	return (
		<div className="itemDetail">
			<h2>{name}</h2>
			<h3>${price}</h3>
			<p>{description}</p>
			{ showItemCount ? 	<ItemCount stock={5} initial={1} onAdd={onAdd}/> : 
								<Link to={"/cart"} ><p className="goToCart"> Ir a carrito </p></Link> }
		</div>
	)
}

export default ItemDetail