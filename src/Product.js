export default function Product(props) {
    return (
        <>
            {props.productItems.map((product) => (
                <div className="flex mb-4 w-full transition duration-500 ease-out transform hover:scale-105 cursor-pointer" key={product.id} onClick={() => props.addToCart(product)}>
                    <div className="relative z-10 bg-yellow-100 px-4 py-4 md:py-6 border-current rounded-lg text-yellow-900 w-3/4 sm:w-4/5">
                        <p className="font-serif font-medium text-lg mb-1 md:mb-3">{product.name}</p>
                        <p className="text-xs md:text-base font-light">{product.description}</p>
                    </div>
                    <div className="relative transform -translate-x-2 rounded-r-md p-4 bg-brown-500 text-white w-1/4 sm:w-1/5 flex items-end">
                        <p className="text-lg">${product.price}</p>
                    </div>
                </div>
            ))}
        </>
        
    )
}
