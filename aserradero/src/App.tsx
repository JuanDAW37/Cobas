import './App.css'
import { Menu } from './components/Navigation/Menu/Menu';
import {Footer} from './components/Footer/Footer.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../src/components/Home.tsx';
import { ListIvas } from './pages/Ivas/Listado/ListIvas.tsx';
import { FormAltaIvas } from './pages/Ivas/FormAlta/FormAltaIvas.tsx';
import { FormModifIvas } from './pages/Ivas/FormModif/FormModifIvas.tsx';
import { FormModifFamilias } from './pages/Familias/FormModif/FormModifFamilias.tsx';
import { ListFam } from './pages/Familias/Listado/ListFam.tsx';
import { FormAltaFamilias } from './pages/Familias/FormAlta/FormAltaFamilias.tsx';
import { ListProductos } from './pages/Productos/Listado/ListProductos.tsx';
import { ListClientes } from './pages/Clientes/Listado/ListClientes.tsx';
import { ListAlbaranes } from './pages/Albaranes/Listado/ListAlbaranes.tsx';
import { ListFacturar } from './pages/Facturar/ListFacturar.tsx';
import { ListFacturas } from './pages/Facturas/Listado/ListFacturas.tsx';
import { FormAltaProd } from './pages/Productos/FormAlta/FormAltaProd.tsx';
import { FormModifProd } from './pages/Productos/FormModif/FormModifProd.tsx';
import { FormAltaCli } from './pages/Clientes/FormAlta/FormAltaCli.tsx';
import { FormModifCli } from './pages/Clientes/FormModif/FormModifCli.tsx';
import { FormAltaAlbar } from './pages/Albaranes/FormAlta/FormAltaAlbar.tsx';
import { FormModifAlbar } from './pages/Albaranes/FormModif/FormModifAlbar.tsx';
import { FormAltaFactu } from './pages/Facturas/FormAlta/FormAltaFactu.tsx';
import { FormModifFactu } from './pages/Facturas/FormModif/FormModifFactu.tsx';

//Componente funcional
function App() {    
  return (    
      <>                
        <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ivas" element={<ListIvas />}>
              <Route index element={<ListIvas />} /> 
              <Route path="alta" element={<FormAltaIvas />} />
              <Route path="modif/:id" element={<FormModifIvas />} />
            </Route>
            <Route path="/familias" element={<ListFam />}>
              <Route index element={<ListFam />} />
              <Route path="alta" element={<FormAltaFamilias />} />
              <Route path="modif/:id" element={<FormModifFamilias />} />
            </Route>
            <Route path="/productos" element={<ListProductos />}>
              <Route index element={<ListProductos />} />
              <Route path="alta" element={<FormAltaProd />} />
              <Route path="modif/:id" element={<FormModifProd />}/>
            </Route>
            <Route path="/clientes" element={<ListClientes />} />              
              <Route path="/clientes/alta" element={<FormAltaCli />} />
              <Route path="/clientes/modif/:id" element={<FormModifCli />} />
            
            <Route path="/albaranes" element={<ListAlbaranes />}>
              <Route index element={<ListAlbaranes />} />
              <Route path="alta" element={<FormAltaAlbar />} />
              <Route path="modif/:id" element={<FormModifAlbar />}/>
            </Route>
            <Route path="/facturar" element={<ListFacturar />}>
              <Route index element={<ListFacturar />} />              
            </Route>
            <Route path="/facturas" element={<ListFacturas />}>
              <Route index element={<ListFacturas />} />
              <Route path="alta" element={<FormAltaFactu />} />
              <Route path="modif/:id" element={<FormModifFactu />}/>
            </Route>
          </Routes>
        </BrowserRouter>      
        <div className="footer"><Footer /></div>
      </>    
    
  )    
}

export default App
