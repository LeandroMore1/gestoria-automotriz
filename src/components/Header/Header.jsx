import { NavBar } from "../NavBar/NavBar";
import Carousel from 'react-bootstrap/Carousel';
import './Header.css'

export const Header = () => {
    return (
        <>
            <NavBar />
            <Carousel className="custom-carousel" id="header" interval={4000} controls={false} indicators={false} pause={false} >
                <Carousel.Item>
                    <img src="https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.pexels.com/photos/17519377/pexels-photo-17519377/free-photo-of-coche-vehiculo-plata-suv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.pexels.com/photos/16835226/pexels-photo-16835226/free-photo-of-carretera-paisaje-naturaleza-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </Carousel.Item>
            </Carousel>
            
            <div className="header-caption">
                <h1>Gestoría Automotriz</h1>
                <h2 id="header-subtitle">Mandataria Matriculada</h2>
            </div>
        </>
    )
}