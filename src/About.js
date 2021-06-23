import coffeeBag from './assets/images/coffee-beans-bag.png';
import useElementOnScreen from './utils/useElementOnScreen';

export default function About() {
    const [ containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0
    })
    
    return (
        <>
            <div className="relative max-w-screen-2xl mx-auto pt-20 md:pt-32 pb-28 md:pb-64 pl-4 text-gray-700 bg-white overflow-hidden" id="about">
                <div className="flex flex-wrap xl:flex-nowrap items-start -m-10" ref={containerRef}>
                    <div className="xl:w-2/3 animate-fadein-top m-10">
                        <div className={`max-w-3xl mx-auto px-4 xl:px-0 md:ml-16 opacity-0 ${isVisible && 'animate-fadein-bottom opacity-100'}`}>
                            <h2 className="text-3xl md:text-5xl font-serif leading-normal lg:leading-relaxed">A boutique & fun cafe that brought together coffee cultures of the whole world in California.</h2>
                            <p className="mt-3 sm:mt-5 text-lg md:text-xl md:leading-normal font-light">Duis congue sapien non mauris tristique, eu porttitor arcu feugiat. Quisque sit amet quam sodales, porttitor lectus vitae, consectetur est. Curabitur ac erat vel mi auctor gravida eu in ex. Nulla lorem turpis, faucibus vitae condimentum non, auctor id urna. Maecenas vitae volutpat magna.</p>
                        </div>  
                    </div>
                    <div className="xl:w-1/3 flex flex-wrap xl:px-0 m-5 pl-3 md:pl-16 xl:pl-0">
                        <div className={`opacity-0 m-6 md:m-8 ${isVisible && 'animate-fadein-bottom opacity-100'}`}>
                            <h3 className="text-2xl font-serif mb-3 text-yellow-500">Hours</h3>
                            <p className="text-xl font-serif mb-1">Monday - Friday</p>
                            <p>11 am - 4 pm</p>
                        </div>
                        <div className={`opacity-0 m-6 md:m-8 ${isVisible && 'animate-fadein-bottom opacity-100'}`}>
                            <h3 className="text-2xl font-serif mb-3 text-yellow-500">Launch</h3>
                            <p className="text-xl font-serif mb-1">Monday - Friday</p>
                            <p>11 am - 1 pm</p>
                        </div>
                        <div className={`opacity-0 m-6 md:m-8 ${isVisible && 'animate-fadein-bottom opacity-100'}`}>
                            <h3 className="text-2xl font-serif mb-3 text-yellow-500">Dinner</h3>
                            <p className="text-xl font-serif mb-1">Monday - Friday</p>
                            <p>1 pm - 4 pm</p>
                        </div>
                    </div>
                </div>
                <img src={coffeeBag} width="250" height="221" className="absolute bottom-5 right-5 w-28 lg:w-auto" alt="A bag with coffee beans"></img>
            </div>

            <div className="bg-company-image bg-bottom bg-cover h-64 md:h-96 max-w-screen-2xl mx-auto"></div>
        </>
    )
  }
