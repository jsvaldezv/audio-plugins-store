import React from 'react'
import "./CartUser.css"

import { Link } from "react-router-dom";
import { useCartContext } from '../../Contexts/CartContext'

function CartUser() 
{
	const { cartList, clearCarrito, removeItem, getTotalCart, totalCart } = useCartContext()

	const handleRemoveItem = (inItemId) => {
		removeItem(inItemId)
	}

	const buildCartList = () => {
		return <div className="cartUser-main">

					{ 
						cartList.map(item => (
							<li key={item.id}>
								<h3>{item.name}</h3>
								<h4>${item.price} USD</h4>
								<h5>Cantidad: {item.cant}</h5>
								<img src={item.image}/>
								<button onClick={() => handleRemoveItem(item.id)} className="remove">Remove</button>
							</li>
						))
					}

					<p className="cartUser-total">Total: ${ totalCart.toFixed(2) } USD</p>

					<button onClick={clearCarrito}>Vaciar carrito</button>

				</div>
	}

	const emptyCart = () => {
		return 	<div className="cartUser-empty">
					<h2>No tienes ningún producto añadido</h2>
					<Link to={"/"}><button>Ir a tienda</button></Link>
				</div>
	}

	getTotalCart();

	return (
		<div className="cartUser">
			
			<h1>Tu carrito</h1>

			<ul>
				{ cartList.length > 0 ? buildCartList() : emptyCart() }
			</ul>

		</div>
	)
}

export default CartUser