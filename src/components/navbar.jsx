import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'


export const Navbar = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const screenSize = () => {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        screenSize();
        window.addEventListener('resize', screenSize);
        return () => {window.removeEventListener('resize', screenSize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="header-container">
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/" onClick={closeMobileMenu}> Toledo's Portfolio </Link>
                </div>

                {isMobile && (
                    <button className={`hamburger-btn ${isOpen ? 'active' : ''}`} 
                        onClick={toggleMenu} aria-label="Toggle menu"    
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                )}

                <div className={`navbar-links ${isMobile ? (isOpen ? 'mobile-open' : 'mobile-closed') : ''}`}>
                    {links.map((link, index) => (
                        <Link key={index} to={link.path} onClick={closeMobileMenu}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};