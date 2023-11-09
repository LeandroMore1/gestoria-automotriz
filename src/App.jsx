
import { Header } from './components/Header/Header';
import { Servicios } from './components/Servicios/Servicios';
import { Contacto } from './components/Contacto/Contacto';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Servicios/>
      <Contacto/>
    </div>
  );
}

export default App;
