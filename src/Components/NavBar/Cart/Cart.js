import React from 'react'
import "./Cart.css"

import logoCart from "../../../Assets/carrito.png"

import { useCartContext } from '../../../Contexts/CartContext'

function Cart() 
{
	const { getnumItems, numItems } = useCartContext()

	getnumItems();

	return (
		<div className="cart">
			
			<div>
				<img src={logoCart} />
			</div>

			{ numItems > 0 ? <h3> {numItems} </h3> : "" }
			
		</div>
	)
}

export default Cart