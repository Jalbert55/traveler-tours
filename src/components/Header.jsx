import { useState, useEffect, useRef } from 'react';
import './Header.css'; // Asegúrate de crear este archivo CSS
import logoB from '../assets/LogoB.svg'; // Importa tu logo SVG
import logo from '../assets/Logo.svg'; // Importa el segundo logo SVG
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Importa Link

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Estado para manejar el color del header
    const [currentLogo, setCurrentLogo] = useState(logoB); // Estado para manejar el logo
    const menuRef = useRef(null); // Referencia para el menú
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Cambia el estado si se ha desplazado hacia abajo
            if (window.scrollY > 0) {
                setIsScrolled(true);
                setCurrentLogo(logo); // Cambia el logo al desplazarse
            } else {
                setIsScrolled(false);
                setCurrentLogo(logoB); // Vuelve al logo original
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Verifica si el clic fue fuera del menú y del botón
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-toggle')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // Cambia el logo en función del tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCurrentLogo(logo); // Cambia al logo móvil
                setIsScrolled(true);
            } else {
                setCurrentLogo(isScrolled ? logo : logoB); // Cambia según el scroll
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Llama a la función al cargar el componente

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isScrolled]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header id="header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <img src={currentLogo} alt="Logo" className="logo" />
            <button className={`menu-toggle ${isScrolled ? 'black-text' : ''}`} onClick={toggleMenu}>
                {isMenuOpen ? t('Close') : t('Open')} {t('Menu')}
            </button>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
                <ul>
                    <li className={`fuente-sizes ${isScrolled ? 'black-text' : ''}`}>
                        <Link to="/">{t('Home')}</Link>
                    </li>
                    <li className={`fuente-sizes ${isScrolled ? 'black-text' : ''}`}>
                        <Link to="/about">{t('About')}</Link>
                    </li>
                    <li className={`fuente-sizes ${isScrolled ? 'black-text' : ''}`}>
                        <Link to="/magazine">{t('Magazine')}</Link>
                    </li>
                    <li className={`fuente-sizes ${isScrolled ? 'black-text' : ''}`}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={`fuente-sizes ${isScrolled ? 'black-text' : ''}`}>
                        <Link to="/contacto">{t('Contact')}</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p className={`fuente-sizes ${isScrolled ? 'black-text' : ''}`} style={{ display: 'flex', alignItems: 'center' }}>
                            <a onClick={() => changeLanguage('es')} className={`fuente-sizes ${isScrolled ? 'black-text' : ''}`}>Es</a>
                            <span style={{ margin: '0 5px' }}>/</span>
                            <a onClick={() => changeLanguage('en')} className={`fuente-sizes ${isScrolled ? 'black-text' : ''}`}>En</a>
                        </p>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;