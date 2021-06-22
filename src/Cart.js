export default function Cart(props) {
    if(props.isShowing) {
        return (
            <div className="fixed inset-0 z-50">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex animate-fadein-right-quick">  
                    <div className="relative w-screen max-w-md">
                        <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                            <button
                                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => props.show(false)}>
                                <span className="sr-only">Close panel</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-screen flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            <div className="px-4 sm:px-6">
                                <p className="text-lg lg:text-2xl font-serif font-medium text-gray-900 border-b pb-8">Shopping Cart</p>
                            </div>
                            <div className="mt-6 flex-1 px-4 sm:px-6">
                                {props.item}
                                <div className="border-t pt-8 flex">
                                    <div className="w-3/5">
                                        <h2 className="text-lg md:text-xl font-medium">Total:</h2>
                                    </div>
                                    <div className="w-1/5">
                                        <p className="text-lg">${props.totalItems}</p>
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
