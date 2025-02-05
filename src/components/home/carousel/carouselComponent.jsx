import { useState, useEffect } from "react";
import "./carousel.css";

import usaImage1 from "../../../assets/images/viaje1.jpg";
import usaImage2 from "../../../assets/images/viaje2.jpeg";
import usaImage3 from "../../../assets/images/viaje3.jpeg";
import usaImage4 from "../../../assets/images/viaje4.png";

const images = [usaImage1, usaImage2, usaImage3, usaImage4];

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 4000); // Cambiar imagen cada 4 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-slide">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="carousel-image"
                />
            </div>
            <button className="carousel-arrow left" onClick={handlePrev}>
                ‹
            </button>
            <button className="carousel-arrow right" onClick={handleNext}>
                ›
            </button>
        </div>
    );
};

export default CarouselComponent;
