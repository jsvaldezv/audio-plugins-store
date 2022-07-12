import React from 'react'
import "./Cart.css"

import logoCart from "../../../Assets/carrito.png"

function Cart() 
{
	return (
		<div className="cart">
			<img src={logoCart} />
		</div>
	)
}

export default Cart