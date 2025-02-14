import "./PromoBanner.css";
import bannerImage from "../../../assets/images/banner1.webp"; 

const PromoBanner = () => {
    return (
        <div className="promo-banner">
            <img src={bannerImage} alt="Promoción Especial" className="promo-image" />
        </div>
    );
};

export default PromoBanner;
