export default function CartButton(props) {
    return (
        <button type="button" 
            className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-yellow-800 text-white block z-40 focus:outline-none hover:bg-yellow-700 hover:transition ease-in-out duration-300" 
            onClick={() => props.show(true)}>
            <span className="sr-only">Open shop cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-3 transition duration-300 transform w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {props.badgeContent !== 0 ? 
                <div className="z-40 absolute -top-1 -right-1 w-8 h-8 rounded-full bg-yellow-300 text-gray-600 p-1">
                    <p className="text-base">{props.badgeContent}</p>
                </div>
            : <div></div>
            }
        </button>
    )
    
}
