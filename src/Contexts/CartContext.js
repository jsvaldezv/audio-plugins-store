import { createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

	const [cartList, setCartList] = useState([])

	const addToCart = (inItem) => {

		let isLoaded = cartList.find(item => item.id === inItem.id)

		if (isLoaded) {
			console.log("You already have this product")
		}
		else{
			setCartList([
				...cartList,
				inItem
			]);
		}
	}

	const removeItem = (itemID) => {
		let item = cartList.findIndex(item => item.id === itemID)
		cartList.splice(item, 1);
	}

	const clear = () => {
		setCartList([])
	}

	const isInCart = (itemID) => {
		let isLoaded = cartList.find(item => item.id === itemID)

		if (isLoaded)
			return true;
		else
			return false;
	}

	return (
		<CartContext.Provider value={{ 	cartList,
										addToCart,
										removeItem,
										// clear,
										// isInCart 
									}}>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider;