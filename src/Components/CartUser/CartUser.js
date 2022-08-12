import React from 'react'
import "./CartUser.css"

import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCartContext } from '../../Contexts/CartContext'
import { getFirestore, collection, addDoc } from "firebase/firestore";

function CartUser() 
{
	const navigate = useNavigate();
	const { cartList, clearCarrito, removeItem, getTotalCart, totalCart } = useCartContext()

	const handleRemoveItem = (inItemId) => {
		removeItem(inItemId)
	}

	const getUserForms = () => {
		return 	<>
					<Formik 
						initialValues={{
							nombre: "",
							correo: ""
						}}
						validate={(valores) => {
							let errores = {};
		
							// Validacion nombre
							if(!valores.nombre){
								errores.nombre = 'Por favor ingresa un nombre'
							} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
								errores.nombre = 'El nombre solo puede contener letras y espacios'
							}
		
							// Validacion correo
							if(!valores.correo){
								errores.correo = 'Por favor ingresa un correo electronico'
							} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
								errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
							}
		
							return errores;
						}}

						onSubmit={(valores, {resetForm}) => {
							resetForm();

							const order = {}
							order.buyer = {email: valores.correo, name:valores.nombre, phone:valores.phone}

							order.items = cartList.map(prod => {
								return {
									product: prod.name,
									id: prod.id,
									price: prod.price,
									image: prod.image,
									cant: prod.cant
								}
							})
							
							let d = new Date();
							let dateString = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

							order.date = dateString;
							order.total = totalCart.toFixed(2);

							const db = getFirestore();
							const queryOrders = collection(db, "orders") 
							addDoc(queryOrders, order)
							.then(resp => {
								console.log("Compra realizada:", resp.id);
								clearCarrito();
								navigate(`/thanks/${resp.id}`);
							})
						}} >
						
						{( {errors} ) => (
							<Form className="formulario">

								<div>
									<label htmlFor="nombre">Nombre</label>
									<Field
										type="text" 
										id="nombre" 
										name="nombre" 
										placeholder="Tu nombre"
									/>
									<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
								</div>

								<div>
									<label htmlFor="correo">Correo</label>
									<Field
										type="text" 
										id="correo" 
										name="correo" 
										placeholder="correo@correo.com" 
									/>
									<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
								</div>

								<div>
									<label htmlFor="correo">Confirma correo</label>
									<Field
										type="text" 
										id="correo" 
										name="correo" 
										placeholder="correo@correo.com" 
									/>
									<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
								</div>

								<div>
									<label htmlFor="correo">Telefono</label>
									<Field
										type="text" 
										id="phone" 
										name="phone" 
										placeholder="5521229384" 
									/>
									<ErrorMessage name="correo" component={() => (<div className="error">{errors.phone}</div>)} />
								</div>

								<button type="submit">Enviar</button>

							</Form>
							)}
					</Formik>
				</>
	}

	const buildCartList = () => {
		return <div className="cartUser-main">

					{ 
						cartList.map(item => (
							<li key={item.id}>
								<h3>{item.name}</h3>
								<h4>${item.price} USD</h4>
								<h5>Cantidad: {item.cant}</h5>
								<img src={item.image} alt={item.name}/>
								<button onClick={() => handleRemoveItem(item.id)} className="remove">Remove</button>
							</li>
						))
					}

					<button onClick={clearCarrito}>Vaciar carrito</button>

					{ getUserForms() } 

					<p className="cartUser-total">Total: ${ totalCart.toFixed(2) } USD</p>

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