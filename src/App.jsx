import './App.css';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import NuestrosPlanes from './components/NuestrosPlanes.jsx';
import Directorio from './components/Directorio.jsx';
import Teleorientacion from './components/Teleorientacion.jsx';
import Descuentos from './components/Descuentos.jsx';
import PreguntasFrecuentes from './components/PreguntasFrecuentes.jsx';
import Footer from './components/Footer.jsx';

function App() {


  return (
      <>
          <Header/>
          <Banner/>
          <NuestrosPlanes/>
          <Directorio/>
          <Teleorientacion/>
          <Descuentos/>
          <PreguntasFrecuentes/>
          <Footer/>
      </>
  )
}

export default App
