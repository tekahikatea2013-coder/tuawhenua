import { useEffect, useState } from "react";
import "./Slideshow.css"

function Slideshow({images}){
    const [index, setIndex] = useState(0);

      useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
    }, [images.length])

    return (
    <div className="slideshow">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt=""
          className={`slideshow-image ${i === index ? 'is-active' : ''}`}
        />
      ))}
    </div>
    )

}

export default Slideshow;