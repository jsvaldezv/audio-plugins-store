import { createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

	const [cartList, setCartList] = useState([]);
	const [totalCart, setTotalCart] = useState(0);
	const [numItems, setNumItems] = useState(0);

	const getnumItems = () => {
		let total = 0;
		for (let i = 0; i < cartList.length; i++)
		{
			for (let cant = 0; cant < cartList[i].cant; cant++)
			{
				total += 1;
			}
		}
		
		setNumItems(total);
	}

	const getTotalCart = () => {
		let total = 0;

		for (let i = 0; i < cartList.length; i++)
		{
			for (let cant = 0; cant < cartList[i].cant; cant++)
			{
				let price = parseFloat(cartList[i].price);
				total += price;
			}
		}

		setTotalCart(total)
	}

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
										getTotalCart,
										totalCart,
										getnumItems,
										numItems,

									}}>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider;