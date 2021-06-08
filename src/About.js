export default function About() {
    return (
        <div className="flex flex-wrap py-20 lg:flex-nowrap min-h-screen items-start max-w-screen-xl mx-auto gap-10 lg:gap-20 pt-16 md:pt-36 pl-4 text-gray-700">
            <div className="lg:w-2/3 px-4">
                <div className="max-w-3xl mx-auto lg:pl-16 ">
                    <h2 className="text-3xl md:text-5xl font-thin font-serif md:leading-relaxed">A boutique and fun cafe that brought together coffee cultures of the whole world in California.</h2>
                    <p className="mt-3 sm:mt-5 text-xl md:text-2xl font-light">Duis congue sapien non mauris tristique, eu porttitor arcu feugiat. Quisque sit amet quam sodales, porttitor lectus vitae, consectetur est. Curabitur ac erat vel mi auctor gravida eu in ex. Nulla lorem turpis, faucibus vitae condimentum non, auctor id urna. Maecenas vitae volutpat magna.</p>
                </div>  
            </div>
            <div className="lg:w-1/3 flex flex-wrap lg:px-0 gap-14 px-4">
                <div>
                    <h3 className="text-2xl font-serif mb-3 text-yellow-500">Hours</h3>
                    <p className="text-lg font-serif mb-1">Monday - Sunday</p>
                    <p>11am - 4 pm</p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif mb-3 text-yellow-500">Launch</h3>
                    <p className="text-lg font-serif mb-1">Monday - Sunday</p>
                    <p>11am - 4 pm</p>
                </div>
                <div>
                    <h3 className="text-2xl font-serif mb-3 text-yellow-500">Dinner</h3>
                    <p className="text-lg font-serif mb-1">Monday - Sunday</p>
                    <p>11am - 4 pm</p>
                </div>
            </div>
        </div>
    )
  }
