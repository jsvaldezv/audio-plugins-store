import React from 'react'
import { useParams } from "react-router-dom";

import "./Thanks.css"

function Thanks() 
{
	const { orderId } = useParams();

	return (
		<div className="thanks">
			<h1>Gracias por tu compra</h1>
			<h3>Order ID: {orderId}</h3>
		</div>
	)
}

export default Thanks