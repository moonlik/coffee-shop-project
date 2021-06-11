import Product from './Product';
import coffeeTree from './assets/images/coffee-tree.png';

export default function Menu(props) {
    return (
        <div className="relative min-h-screen max-w-screen-2xl py-20 mx-auto pt-16 md:pt-32 px-4 text-gray-700 bg-white" >
            <img src={coffeeTree} alt="Coffee beans" className="absolute bottom-10 left-0"></img>

            <div className="px-10 md:px-20 mb-10" id="menu" >
                <h2 className="text-center text-3xl md:text-5xl font-thin font-serif md:leading-relaxed">Our Menu</h2>
                <p className="text-center text-lg md:text-xl font-light">Duis congue sapien non mauris tristique, eu porttitor arcu feugiat. Quisque sit amet quam sodales, porttitor lectus vitae, consectetur.</p>
            </div>

            <div className="max-w-md md:max-w-4xl mx-auto md:flex md:gap-20">
                <div className="w-full mb-10">
                    <h3 className="text-2xl md:text-3xl font-serif mb-5 text-center text-brown-600">Coffee</h3>
                    <Product productItems={props.coffee} addToCart={props.addToCart}/>
                </div>
                <div className="w-full">
                    <h3 className="text-2xl md:text-3xl font-serif mb-5 text-center text-brown-600">Desserts</h3>
                    <Product productItems={props.dessert} addToCart={props.addToCart}/>
                </div>
            </div>

            <button type="button" 
                    className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-yellow-800 text-white block z-40 focus:outline-none hover:bg-yellow-700 hover:transition ease-in-out duration-300" 
                    onClick={() => props.handleIsShowing(true)}>
                    <span className="sr-only">Open shop cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-4 transition duration-300 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    <div className="z-40 absolute -top-1 -right-1 w-8 h-8 rounded-full bg-yellow-300 text-gray-600 p-1">
                        <p className="text-base">{props.badgeContent}</p>
                    </div>
            </button>
           
        </div>
    )
  };
