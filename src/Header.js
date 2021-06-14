const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact us', href: '#contact' }
  ]

export default function Header() {
    return (
      <div className="static overflow-hidden bg-hero-pattern bg-center bg-cover md:bg-top pb-20 md:min-h-screen max-w-screen-2xl mx-auto">
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-opacity-60 bg-gray-100 transform origin-top-left -skew-y-25"></div>
        <div className="relative max-w-screen-xl mx-auto">
          <div className="pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-6 px-4 sm:px-6 md:px-12">
                  <nav
                    className="flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium tracking-wider uppercase text-white hover:text-yellow-500">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
            </div>
            <button type="button" className="absolute z-50 top-4 right-4 w-16 h-16 rounded-full bg-yellow-900 text-white block md:hidden">
                <span className="sr-only">Open site navigation</span>
                <svg width="24" height="24" fill="none" className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform">
                    <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <svg width="24" height="24" fill="none" className="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform opacity-0 scale-80">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>
  
            <main className="md:ml-12 px-4 sm:px-6 lg:px-8 mt-28 lg:mt-36">
              <div className="text-left">
                <h1 className="tracking-tight text-yellow-700 text-5xl md:text-7xl font-serif">
                  <span className="block">Baked desserts</span>{' '}
                  <span className="block">& roasted coffee</span>
                </h1>
                <p className="mt-3 text-brown-700 sm:mt-5 text-xl sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat aliqua.
                </p>
                <a href="#menu" className="transition duration-300 ease-in-out w-max mt-6 sm:mt-8 tracking-wider flex items-center justify-center px-8 py-3 border-2 border-brown-500 font-medium rounded-md text-white bg-brown-500 hover:bg-transparent hover:text-brown-500 md:py-4 md:text-md md:px-10 uppercase">Our menu</a>
              </div>
            </main>
          </div>
        </div>

        
      </div>
    )
  }
