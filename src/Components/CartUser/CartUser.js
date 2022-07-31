import React from 'react'
import "./CartUser.css"

import { useCartContext } from '../../Contexts/CartContext'

function CartUser() 
{
	const { cartList } = useCartContext()

	console.log("In carrito:", cartList)

	return (
		<div className="cartUser">
			
			<h1>Tu carrito</h1>

			<ul>
				{ cartList.map(item => (
					<li key={item.id}>
						{item.name} - {item.cant}
						{/* <button onClick={removeItem(item.id)}>Remove</button> */}
					</li>
				))}
			</ul>

			{/* <button onClick={clear}>Vaciar carro</button> */}

		</div>
	)
}

export default CartUser