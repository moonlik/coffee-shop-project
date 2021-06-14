export default function Cart(props) {

    const getTotalSum = (items) =>
    	items.reduce((sum, item) => sum + (item.amount * parseFloat(item.price)), 0);

    if(props.show) {
        return (
            <div className="fixed inset-0 z-50">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">  
                    <div className="relative w-screen max-w-md">
                        <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                            <button
                                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => props.handleIsShowing(false)}>
                                <span className="sr-only">Close panel</span>
                                <div className="h-6 w-6">X</div>
                            </button>
                        </div>
                        
                        <div className="h-screen flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            <div className="px-4 sm:px-6">
                                <p className="text-lg lg:text-2xl font-serif font-semibold text-gray-900 border-b pb-8">Shopping Cart</p>
                            </div>
                            <div className="mt-6 flex-1 px-4 sm:px-6">
                                {props.cartItems.length !== 0 ? props.cartItems.map((product) => (
                                    <div className="flex gap-8 py-6" key={product.id}>
                                        <div className="w-3/5">
                                            <h4 className="text-lg font-semibold">{product.name}</h4> 
                                        </div>
                                        <div className="w-1/5 self-center">
                                            <p className="text-lg">{product.amount}</p>
                                        </div>
                                        <div className="w-1/5 flex self-center">
                                            <p className="text-lg">${product.price}</p>
                                            {/* <div className="cursor-pointer ml-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div> */}
                                        </div>
                                    </div>
                                ))
                                : <div className="py-8 mb-6 text-center">Your cart is empty</div>
                            }

                                <div className="border-t pt-8 flex justify-between">
                                    <div className="w-3/5">
                                        <h2 className="text-xl font-semibold">Total:</h2>
                                    </div>
                                    <div className="w-1/5">
                                        <p className="text-xl">${getTotalSum(props.cartItems)}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return null;
}
