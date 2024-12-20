
import { Header } from './components/Header/Header';
import { Servicios } from './components/Servicios/Servicios';
import { Contacto } from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';
import { Iconos } from './components/Iconos/Iconos';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <a className='wpp' href=" https://wa.me/5491131652089" target="_blank" rel="noopener noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" className='wpp' alt="" />
    </a>
      <Header/>
      <Iconos/>
      <Servicios/>
      <Contacto/>
      <Footer/>
    </div>
         
          </>
  );
}

export default App;
