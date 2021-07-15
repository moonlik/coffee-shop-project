import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import About from './About';
import Menu from './Menu';
import Product from './Product';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import Cart from './Cart';
import CartButton from './CartButton';
import CartItem from './CartItem';
import Feature from './Feature';

export default function App() {
	const navigation = [
		{ name: 'Home', href: '#' },
		{ name: 'About us', href: '#about' },
		{ name: 'Menu', href: '#menu' },
		{ name: 'Contact us', href: '#contact' }
	]

	const coffeeData = [
		{ id: 1, name: 'Espresso', description: 'Lorem ipsum dolor sit amet', price: 2 },
		{ id: 2, name: 'Americano', description: 'Lorem ipsum dolor sit amet', price: 3 },
		{ id: 3, name: 'Latte', description: 'Lorem ipsum dolor sit amet', price: 5.44 },
		{ id: 4, name: 'Capuccino', description: 'Lorem ipsum dolor sit amet', price: 3 },
		{ id: 5, name: 'Macchiato', description: 'Lorem ipsum dolor sit amet', price: 4.25 },
	]

	const dessertData = [
		{id: 11, name: 'Blueberry Muffin', description: 'Bursting taste of fresh blueberries', price: 3},
		{id: 21, name: 'Cinnamon Roll with Raspberry', description: 'Classic roll and juicy raspberry', price: 4},
		{id: 31, name: 'Classic Cheesecake', description: 'When you want nothing superfluous', price: 3.6},
		{id: 41, name: 'Carrot Cake', description: 'Lorem ipsum dolor sit amet', price: 4.27},
		{id: 51, name: 'Mango mousse', description: 'Lorem ipsum dolor sit amet', price: 10.34},
	]
	
	const [cartItems, setCartItems] = useState([]);

	const [cartShowing, setCartShowing] = useState(false);

	const [sidebarShowing, setSidebarShowing] = useState(false);

	const getTotalItems = (items) =>
    	items.reduce((sum, item) => sum + item.amount, 0);

	const handleAddToCart = (clickedItem) => {
		setCartItems(prev => {
		  // 1. Is the item already added in the cart?
		  const isItemInCart = prev.find(item => item.id === clickedItem.id);
	
		  if (isItemInCart) {
			return prev.map(item =>
			  item.id === clickedItem.id
				? { ...item, amount: item.amount + 1 }
				: item
			);
		  }
		  // First time the item is added
		  return [...prev, { ...clickedItem, amount: 1 }];
		});
	};

	const handleRemoveFromCart = (id) => {
		setCartItems(prev =>
		  prev.reduce((ack, item) => {
			if (item.id === id) {
			  if (item.amount === 1) return ack;
			  return [...ack, { ...item, amount: item.amount - 1 }];
			} else {
			  return [...ack, item];
			}
		  }, [])
		);
	  };

	const sumTotalCartItems = (items) =>
		items.reduce((sum, item) => (sum + (item.amount * item.price)), 0).toFixed(2);
	
	return (
		<>
			<Header navigation={navigation} show={setSidebarShowing} />
			<Sidebar navigation={navigation} isShowing={sidebarShowing} show={setSidebarShowing} />
			<About />
			<Menu 
				coffee={ <Product addToCart={handleAddToCart} productItems={coffeeData} />} 
				dessert={ <Product addToCart={handleAddToCart} productItems={dessertData} />} 
				button={ <CartButton show={setCartShowing} badgeContent={getTotalItems(cartItems)} /> } />
			<Feature />
			<ImageSlider />
			<Cart 
				isShowing={cartShowing} 
				totalItems={sumTotalCartItems(cartItems)} 
				show={setCartShowing} 
				item={ <CartItem cartItems={cartItems} removeFromCart={handleRemoveFromCart} />} />
			<Footer />
		</>
	);
}
