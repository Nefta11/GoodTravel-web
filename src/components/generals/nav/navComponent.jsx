import { useState, useEffect } from 'react';
import { FaMoneyBillWave, FaBars, FaTimes, FaHome, FaSuitcase, FaInfoCircle, FaBlog, FaImages, FaEnvelope, FaUsers, FaHandshake, FaFemale } from 'react-icons/fa';
// import { GiVillage } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/LOGOTIPO_OFICIAL.webp';
import LanguageSelector from '../lenguaje/LanguageSelector';
import NavItem from './NavItem';
import './navComponent.css';
// import rehilete from '../../../assets/images/rehilete.svg';

const NavComponent = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const newsSubmenuItems = [
        {
            label: 'Adventy Pay',
            href: '/AdventyPay',
            icon: FaMoneyBillWave
        },
        {
            label: 'Embajadoras Adventy',
            href: '/distribuidor',
            icon: FaFemale
        },
        {
            label: 'Adventy Partners',
            href: '/partners',
            icon: FaHandshake
        }
    ];

    return (
        <nav className="nav-container fixed-nav">
            <div className="nav-content">
                {/* Logo */}
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Adventy Travels" className="nav-logo" />
                </Link>

                {/* Controls container (always visible) */}
                <div className="controls-container">
                    {/* Desktop language selector */}
                    {!isMobile && (
                        <div className="language-selector-desktop-container">
                            <LanguageSelector />
                        </div>
                    )}

                    {/* Mobile language selector */}
                    {isMobile && (
                        <div className="language-selector-mobile-container">
                            <LanguageSelector />
                        </div>
                    )}
                </div>

                {/* Mobile hamburger button */}
                {isMobile && (
                    <div className="mobile-menu-btn" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                )}

                {/* Main navigation */}
                <div className="nav-menu-container">
                    <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                        <NavItem
                            to="/"
                            icon={isMobile ? FaHome : null}
                            label={t('home')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/'}
                        />
                        <NavItem
                            to="/experiencias"
                            icon={isMobile ? FaSuitcase : null}
                            label={t('experiences')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/experiencias'}
                        />
                        <NavItem
                            to="/nosotros"
                            icon={isMobile ? FaInfoCircle : null}
                            label={t('about')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/nosotros'}
                        />
                        <NavItem
                            to="/blog"
                            icon={isMobile ? FaBlog : null}
                            label={t('blog')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/blog'}
                        />
                        <NavItem
                            to="/galeria"
                            icon={isMobile ? FaImages : null}
                            label={t('gallery')}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/galeria'}
                        />
                        <NavItem
                            icon={isMobile ? FaEnvelope : null}
                            label={t('contact')}
                            menuOpen={menuOpen}
                            submenu
                        />
                        <NavItem
                            icon={isMobile ? FaUsers : null}
                            label="Nuevos"
                            menuOpen={menuOpen}
                            submenu
                            submenuItems={newsSubmenuItems}
                        />
                        {/* <NavItem
                            to="/xicotepec"
                            icon={isMobile ? GiVillage : null}
                            label={<span>¡Xicotepec!<img src={rehilete} alt="Rehilete" className="label-rehilete-spin" /></span>}
                            menuOpen={menuOpen}
                            isActive={location.pathname === '/xicotepec'}
                        /> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavComponent;