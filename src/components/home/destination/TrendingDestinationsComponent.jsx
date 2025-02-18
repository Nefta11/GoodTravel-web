import { useTranslation } from 'react-i18next';
import { useRef, useEffect, useState } from 'react';
import "./TrendingDestinations.css";

const destinations = [
    { name: "Cancún", image: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/destinations/cancun.webp" },
    { name: "Mexico City", image: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/destinations/cdmx.webp" },
    { name: "Playa del Carmen", image: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/destinations/playaDelCarmen.webp" },
    { name: "San Miguel de Allende", image: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/destinations/SanMiguel.webp" },
    { name: "Mérida", image: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/destinations/merida.webp" },
    { name: "Tulum", image: "https://raw.githubusercontent.com/Nefta11/GoodTravel-web/refs/heads/main/public/images/destinations/tulum.webp" },
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
                    observer.disconnect(); // Desconectar el observer después de la primera intersección
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="trending-container" ref={ref}>
            <h2 className='trending-container-title'>{t('trendingDestinations')}</h2>
            <p>{t('peopleSearching')}</p>
            <div className={`trending-grid ${inView ? 'in-view' : ''}`}>
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="destination-card"
                        style={{ backgroundImage: `url(${destination.image})` }}
                    >
                        <span className="destination-name">
                            {destination.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingDestinations;
