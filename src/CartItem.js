export default function CartItem(props) {
    return (
        <>
            {props.cartItems.length !== 0 ? 
                props.cartItems.map((product) => (
                    <div className="flex gap-8 py-6" key={product.id}>
                        <div className="w-3/5">
                            <h4 className="text-lg font-medium">{product.name}</h4> 
                        </div>
                        <div className="w-1/5 self-center">
                            <p className="text-lg">${product.price}</p>
                        </div>
                        <div className="w-1/5 flex self-center space-x-3">
                            <p className="text-lg">{product.amount}</p>
                            <div className="self-end cursor-pointer" onClick={() => props.removeFromCart(product.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))
                : <div className="py-8 mb-6 text-center">Your cart is empty</div>
            }
        </>
    )
}
