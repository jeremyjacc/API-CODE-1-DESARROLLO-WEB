import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Cliente from './components/Clientes/Cliente';
import Navegacion from './components/layout/navegacion.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Clientes from './components/Clientes/Clientes.js';
import Pedidos from './components/Pedidos/Pedidos.js';
import Productos from './components/Productos/Productos.js';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='grid contenedor contenido-principal'>
          <Navegacion></Navegacion>
          <main className='caja-contenido col-9'>
            <Routes>
              <Route path='/' element={<Clientes />} />
              <Route path='/pedidos' element={<Pedidos />} />
              <Route path='/Pedidos' element={<Pedidos />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/Productos' element={<Productos />} />
            </Routes>
          </main>


        </div>

      </div>
    </Router >
  );
}
export default App;