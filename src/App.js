import { useState } from 'react';
import Header from './Header';
import About from './About';
import Menu from './Menu';
import Footer from './Footer';

const App = () => {
	const coffeeData = [
		{ id: 1, name: 'Espresso', description: 'Lorem ipsum dolor sit amet', price: '$2' },
		{ id: 2, name: 'Americano', description: 'Lorem ipsum dolor sit amet', price: '$3' },
		{ id: 3, name: 'Latte', description: 'Lorem ipsum dolor sit amet', price: '$4.5' },
		{ id: 4, name: 'Capuccino', description: 'Lorem ipsum dolor sit amet', price: '$3' },
		{ id: 5, name: 'Macchiato', description: 'Lorem ipsum dolor sit amet', price: '$4.5' },
	]

	const dessertData = [
		{id: 1, name: 'Blueberry Muffin', description: 'Bursting taste of fresh blueberries', price: '$3'},
		{id: 2, name: 'Cinnamon Roll with Raspberry', description: 'Classic roll and juicy raspberry', price: '$4'},
		{id: 3, name: 'Classic Cheesecake', description: 'When you want nothing superfluous', price: '$3.6'},
		{id: 4, name: 'Carrot Cake', description: 'Lorem ipsum dolor sit amet', price: '$4'},
		{id: 5, name: 'Mango mousse', description: 'Lorem ipsum dolor sit amet', price: '$10.6'},
	]
	
	const [cartItems, setCartItems] = useState([]);

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
	
	return (
		<div>
			<Header />
			<About />
			<div className="bg-company-image bg-bottom bg-cover h-64 md:h-96"></div>
			<Menu coffee={coffeeData} dessert={dessertData} cartItems={cartItems} addToCart={handleAddToCart} badgeContent={getTotalItems(cartItems)} />
			<Footer />
		</div>
	);
}

export default App;
