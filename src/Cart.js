export default function Cart(props) {
    if (props.show) {
        return (
            <div className="absolute bottom-20 right-1 text-gray-600 bg-yellow-100 p-4">
                <h2>Your Shopping Cart</h2>
                {props.cartItems.map((product) => (
                    <div className="flex gap-8 mb-6 justify-between" key={product.id}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>{product.amount}</div>
                    </div>
                ))}
                <h2>Total: $</h2>
            </div>
        )
    }
    return null;
}
