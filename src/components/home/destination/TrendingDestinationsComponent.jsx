import { useTranslation } from 'react-i18next';
import { useRef, useEffect, useState } from 'react';
import "./TrendingDestinations.css";

const destinations = [
    { name: "Cancún", image: "/src/assets/images/destinations/cancun.jpg" },
    { name: "Playa del Carmen", image: "/src/assets/images/destinations/playaDelCarmen.jpg" },
    { name: "Tulum", image: "/src/assets/images/destinations/tulum.jpg" },
    { name: "Mexico City", image: "/src/assets/images/destinations/cdmx.webp" },
    { name: "Mérida", image: "/src/assets/images/destinations/merida.jpg" },
    { name: "San Miguel de Allende", image: "/src/assets/images/destinations/SanMiguel.webp" },
    { name: "Monterrey", image: "/src/assets/images/destinations/MTY.webp" },
];

const TrendingDestinations = () => {
    const { t } = useTranslation();
    const [inView, setInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="trending-container" ref={ref}>
            <h2>{t('trendingDestinations')}</h2>
            <p>{t('peopleSearching')}</p>
            <div className={`trending-grid ${inView ? 'in-view' : ''}`}>
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="destination-card"
                        style={{ backgroundImage: `url(${destination.image})` }}
                    >
                        <span>{destination.name} <img src="/src/assets/images/mx.webp" alt="Mexico Flag" style={{ width: '20px', height: '15px' }} /></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingDestinations;
