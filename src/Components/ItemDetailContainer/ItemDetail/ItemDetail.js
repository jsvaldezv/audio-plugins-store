import React, { useState } from 'react'
import { useCartContext } from "../../../Contexts/CartContext"
import { Link } from "react-router-dom";
import "./ItemDetail.css"

import ItemCount from "../../ItemCount/ItemCount.js"

function ItemDetail({name, description, price, id, image}) 
{
	const { addToCart, cartList } = useCartContext();

	const [showItemCount, setShowItemCount] = useState(true);

	const onAdd = (cant) => {
		setShowItemCount(false);
		addToCart( { id: id, name: name, description: description, price: price, cant: cant, image: image } )
	}

	// console.log("Cart list:", cartList);

	return (
		<div className="itemDetail">
			<div className="itemDetail-product">
				<div>
					<h2>{name}</h2>
					<h3>${price}</h3>
				</div>
				<img src={image}/>
			</div>

			<div className="itemDetail-description">
				<p>{description}</p>
				{ showItemCount ? 	<ItemCount stock={5} initial={1} onAdd={onAdd}/> : 
									<Link to={"/cart"} ><p className="goToCart"> Ir a carrito </p></Link> }
			</div>

		</div>
	)
}

export default ItemDetail