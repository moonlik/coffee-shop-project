export default function Product(props) {
    return (
        <div>
            {props.productItems.map((product) => (
                <div className="flex mb-4 w-full" key={product.id}>
                    <div className="relative z-10 bg-yellow-100 px-4 py-6 border-current rounded-lg text-yellow-900 w-4/5">
                        <p className="font-medium text-lg mb-3">{product.name}</p>
                        <p className="font-light">{product.description}</p>

                        <button onClick={() => props.addToCart(product)} className="absolute top-0 right-2 text-xl p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative transform -translate-x-2 rounded-r-md p-4 bg-brown-500 text-white w-1/5 flex items-end">
                        <p className="text-lg">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
        
    )
}
