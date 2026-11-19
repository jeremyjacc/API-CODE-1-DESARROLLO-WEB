import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header.js';
import Cliente from './components/clientes/cliente';
import Clientes from './components/clientes/Clientes.js';
import Pedidos from './components/pedidos/Pedidos.js';
import Productos from './components/productos/Productos.js';
import Navegacion from './components/layout/navegacion.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='grid contenedor contenido-principal'>
          <Navegacion></Navegacion>
          <main className='caja-contenido col-9'>
            <Routes>
              <Route exact path='/' element={<Clientes></Clientes>} > </Route>
              <Route exact path='/pedidos' element={<Pedidos></Pedidos>} > </Route>
              <Route exact path='/productos' element={<Productos></Productos>}> </Route>

            </Routes>
          </main>
          <Cliente />
        </div>
      </div>
    </Router>
  );
}

export default App;
