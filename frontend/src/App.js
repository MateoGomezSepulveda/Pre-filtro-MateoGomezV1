import './App.css';
import Refugios from './components/Main/Refugios/refugio';
import Animales from './components/Main/Animales/animales';
import Adoptantes from './components/Main/Adoptantes/adoptante';
import Veterinarios from './components/Main/Veterinarios/veterinario';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Donantes from './components/Main/Donantes/donantes';
import Donaciones from './components/Main/Donaciones/donaciones';
import Headers from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
      <Headers/>
      <Link to='/' className='link-0'>Home</Link><Route path='/'><Refugios/></Route>
        <Link to='/animales' className='link-1'>Animales</Link><Route path='/animales'><Animales/></Route>
        <Link to='/adoptantes' className='link-2'>Adoptantes</Link><Route path='/adoptantes'><Adoptantes/></Route>
        <Link to='/veterinarios' className='link-3'>Veterinarios</Link><Route path='/veterinarios'><Veterinarios/></Route>
        <Link to='/donantes' className='link-4'>Donantes</Link><Route path='/donantes'><Donantes/></Route>
        <Link to='/donaciones' className='link-5'>Donaciones</Link><Route path='/donaciones'><Donaciones/></Route>
        <Footer/> 
      </div>   
    </Router>
  );
}

export default App;
