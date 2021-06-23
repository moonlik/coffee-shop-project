import coffeeTree from './assets/images/coffee-tree.png';
import useElementOnScreen from './utils/useElementOnScreen';

export default function Menu(props) {
    const [ containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0
    })

    return (
        <div className="relative min-h-screen max-w-screen-2xl py-20 mx-auto pt-16 md:pt-32 px-4 text-gray-700 bg-white" >
            <img width="281" height="300" src={coffeeTree} alt="Coffee beans" className="absolute bottom-16 left-0"></img>

            <div className="px-10 md:px-20 mb-10 max-w-4xl mx-auto" id="menu" ref={containerRef}>
                <h2 className="text-center text-3xl md:text-5xl font-thin font-serif mb-4 md:mb-6">Our Menu</h2>
                <p className="text-center text-md md:text-lg font-light">Duis congue sapien non mauris tristique, eu porttitor arcu feugiat. Quisque sit amet quam sodales, porttitor lectus vitae, consectetur.</p>
            </div>

            <div className="max-w-md md:max-w-4xl mx-auto md:flex md:gap-20">
                <div className={`w-full mb-10 opacity-0 ${isVisible && 'animate-fadein-left opacity-100'}`}>
                    <h3 className="text-2xl md:text-3xl font-serif mb-5 text-center text-brown-600">Coffee</h3>
                    {props.coffee}
                </div>
                <div className={`w-full opacity-0 ${isVisible && 'animate-fadein-right opacity-100'}`}>
                    <h3 className="text-2xl md:text-3xl font-serif mb-5 text-center text-brown-600">Desserts</h3>
                    {props.dessert}
                </div>
            </div>

            {props.button}
        </div>
    )
  };
