import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Experiences from '../pages/Experiences';
import AboutUs from '../pages/AboutUs';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import Distribuidor from '../pages/Distribuidor';
import Partners from '../pages/Partners';
import VerifyDistributor from '../pages/VerifyDistributor';
import AdventyPay from '../pages/adventyPay/AdventyPay';
import Error404 from '../pages/pagError/Error404';

const RouterStack = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/experiencias" element={<Experiences />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/distribuidor" element={<Distribuidor />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/verify-distributor" element={<VerifyDistributor />} />
            <Route path="/AdventyPay" element={<AdventyPay />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default RouterStack;
