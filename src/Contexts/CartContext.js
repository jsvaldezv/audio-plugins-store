import { createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

	const [cartList, setCartList] = useState([])

	const addToCart = (inItem) => {

		let isLoaded = cartList.find(item => item.id === inItem.id)

		if (isLoaded) {
			isLoaded.cant += inItem.cant;
		}
		else{
			setCartList([
				...cartList,
				inItem
			]);
		}
	}

	const removeItem = (itemID) => {
		setCartList(cartList.filter(item => item.id !== itemID));
	}

	const clearCarrito = () => {
		setCartList([])
	}

	// const isInCart = (itemID) => {
	// 	let isLoaded = cartList.find(item => item.id === itemID)

	// 	if (isLoaded)
	// 		return true;
	// 	else
	// 		return false;
	// }

	return (
		<CartContext.Provider value={{ 	cartList,
										addToCart,
										removeItem,
										clearCarrito,
									}}>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider;