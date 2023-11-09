import './NavBar.css'
import { useState, useEffect } from 'react'

export const NavBar = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`navbar container-fluid ${isVisible ? 'visible' : ''}`}>
            <div className="container d-flex justify-content-md-start justify-content-around">
                <a className='navLink' href="#header">Inicio</a>
                <a className='navLink' href="#header-subtitle">Servicios</a>
                <a className='navLink' href="#contacto-title">Contacto</a>
            </div>
        </div>
    )
}