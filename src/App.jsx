import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import HeroSection from './components/HeroSection';

import About from './secciones/About';
import Magazine from './secciones/Magazine';
import Blog from './secciones/Blog';
import Contacto from './secciones/Contacto';
import Album from './secciones/Album';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './i18n';
import './App.css';

function App() {
    const [isSplashVisible, setSplashVisible] = useState(true);

    const handleSplashFinish = () => {
        setSplashVisible(false); // Oculta la pantalla de carga
    };

    return (
        <div>
            {isSplashVisible && <SplashScreen onFinish={handleSplashFinish} />}
            {!isSplashVisible && <Header />}
            <main>
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/magazine" element={<Magazine />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/album" element={<Album />} />
                    <Route path="*" element={<HeroSection />} />
                </Routes>
            </main>
            {!isSplashVisible && <Footer />}
        </div>
    );
}

export default App;