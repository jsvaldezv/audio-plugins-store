import React from 'react'
import "./CartUser.css"

import { useCartContext } from '../../Contexts/CartContext'

function CartUser() 
{
	const { cartList, clearCarrito, removeItem } = useCartContext()

	const handleRemoveItem = (inItemId) => {
		removeItem(inItemId)
	}

	console.log("In carrito:", cartList)

	return (
		<div className="cartUser">
			
			<h1>Tu carrito</h1>

			<ul>
				{ cartList.map(item => (
					<li key={item.id}>
						{item.name} - {item.cant}
						<button onClick={() => handleRemoveItem(item.id)}>Remove</button>
					</li>
				))}
			</ul>

			<button onClick={clearCarrito}>Vaciar carrito</button>

		</div>
	)
}

export default CartUser