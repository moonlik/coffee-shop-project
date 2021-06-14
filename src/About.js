import coffeeBag from './assets/images/coffee-beans-bag.png'

export default function About() {
    return (
        <>
            <div className="relative py-20 min-h-screen max-w-screen-2xl mx-auto pt-16 md:pt-36 pl-4 text-gray-700 bg-white" id="about">
                <div className="flex flex-wrap xl:flex-nowrap items-start gap-10 lg:gap-20">
                    <div className="xl:w-2/3 px-4">
                        <div className="max-w-3xl mx-auto xl:pl-16 ">
                            <h2 className="text-3xl md:text-5xl font-serif md:leading-normal">A boutique and fun cafe that brought together coffee cultures of the whole world in California.</h2>
                            <p className="mt-3 sm:mt-5 text-lg md:text-xl font-light">Duis congue sapien non mauris tristique, eu porttitor arcu feugiat. Quisque sit amet quam sodales, porttitor lectus vitae, consectetur est. Curabitur ac erat vel mi auctor gravida eu in ex. Nulla lorem turpis, faucibus vitae condimentum non, auctor id urna. Maecenas vitae volutpat magna.</p>
                        </div>  
                    </div>
                    <div className="xl:w-1/3 flex flex-wrap xl:px-0 gap-14 px-4">
                        <div>
                            <h3 className="text-2xl font-serif mb-3 text-yellow-500">Hours</h3>
                            <p className="text-lg font-serif mb-1">Monday - Friday</p>
                            <p>11 am - 4 pm</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif mb-3 text-yellow-500">Launch</h3>
                            <p className="text-lg font-serif mb-1">Monday - Friday</p>
                            <p>11 am - 1 pm</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif mb-3 text-yellow-500">Dinner</h3>
                            <p className="text-lg font-serif mb-1">Monday - Friday</p>
                            <p>1 pm - 4 pm</p>
                        </div>
                    </div>
                </div>
                <img src={coffeeBag} className="absolute bottom-5 right-5 w-28 lg:w-auto" alt="A bag with coffee beans"></img>
            </div>

            <div className="bg-company-image bg-bottom bg-cover h-64 md:h-96 max-w-screen-2xl mx-auto"></div>
        </>
    )
  }
