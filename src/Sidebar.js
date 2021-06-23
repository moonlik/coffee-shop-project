import logo from './assets/images/coffee-house-logo.png';

export default function Sidebar(props) {
    if(props.isShowing) {
        return ( 
            <div className="absolute top-0 inset-x-0 z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 animate-popup">
                <div className="p-2 transition transform duration-300 ease-in origin-top-right md:hidden">  
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="py-3">
                            <img width="80" height="74" className="w-20 mx-auto" src={logo} alt="Coffee House logo"></img>
                            <p className="text-sm text-center text-brown-700">Aliquam tempor ante at dignissim blandit.</p>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {props.navigation.map((nav) => (
                                <a key={nav.name} href={nav.href} onClick={() => props.show(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-brown-50">
                                    {nav.name}
                                </a>
                            ))}
                        </div>
                        <button onClick={() => props.show(false)} type="button" className="bg-yellow-50 px-5 py-3 w-full flex justify-center text-yellow-800 hover:text-yellow-900 hover:bg-brown-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                            <span className="sr-only">Close main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>   
                    </div>
                </div>
            </div>
        )
    }

    return null;
}
