export default function Header(props) {
    return (
      <div className="relative overflow-hidden bg-hero-pattern bg-center bg-cover md:bg-top pb-32 max-w-screen-2xl mx-auto">
        <div className="absolute inset-0 bg-opacity-80 bg-gray-100 transform origin-top-left -skew-y-25"></div>
        <div className="relative max-w-screen-xl mx-auto">
          <button onClick={() => props.show(true)} type="button" className="md:hidden mt-3 ml-3 rounded-md p-2 inline-flex items-center justify-center text-yellow-800 hover:text-yellow-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                <span className="sr-only">Open site navigation</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
          </button>
            
          <div className="pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-6 px-4 sm:px-6 md:px-12">
              <nav
                className="flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global">
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {props.navigation.map((nav) => (
                    <a key={nav.name} href={nav.href} className="font-medium tracking-wider uppercase text-brown-500 hover:text-brown-700">
                      {nav.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <div className="ml-4 md:ml-12 px-4 md:px-8 mt-24 md:mt-36">
              <div className="text-left animate-fadein-bottom">
                <h1 className="tracking-tight text-yellow-700 text-5xl md:text-7xl font-serif">
                  <span className="block">Baked desserts</span>{' '}
                  <span className="block">& roasted coffee</span>
                </h1>
                <p className="mt-3 text-brown-700 sm:mt-5 text-lg max-w-md md:max-w-xl md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat aliqua.
                </p>
                <a href="#menu" className="transition duration-500 ease-in-out w-max mt-6 sm:mt-8 tracking-wider flex items-center justify-center px-8 py-3 border-2 border-brown-500 font-medium rounded-md text-white bg-brown-500 hover:bg-transparent hover:text-brown-500 md:py-4 md:text-md md:px-10 uppercase">Order now</a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
