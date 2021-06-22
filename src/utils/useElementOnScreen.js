import { useRef, useState, useEffect } from "react"

export default function useElementOnScreen(options) {
    const containerRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);
  
    const callbackFunction = (entries) => {
      const [ entry ] = entries;

      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      const element = containerRef.current;
      observer.observe(element);
      
      return () => {
        observer.unobserve(element);
      }
    }, [containerRef, options]);
  
    return [containerRef, isVisible];
  }
  