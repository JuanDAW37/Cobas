import './App.css'
import { Menu } from './components/Navigation/Menu/Menu';
import {Footer} from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../src/components/Home.tsx';
import { ListIvas } from '../src/components/Ivas/Listado/ListIvas.tsx';
import { FormAltaIvas } from './components/Ivas/FormAlta/FormAltaIvas.tsx';
import { FormModifIvas } from './components/Ivas/FormModif/FormModifIvas.tsx';
import { FormModifFamilias } from './components/Familias/FormModif/FormModifFamilias';
import { ListFam } from '../src/components/Familias/Listado/ListFam.tsx';
import { FormAltaFamilias } from './components/Familias/FormAlta/FormAltaFamilias.tsx';
import { ListProductos } from './components/Productos/Listado/ListProductos.tsx';
import { ListClientes } from './components/Clientes/Listado/ListClientes.tsx';
import { ListAlbaranes } from './components/Albaranes/Listado/ListAlbaranes.tsx';
import { ListFacturar } from './components/Facturar/ListFacturar.tsx';
import { ListFacturas } from './components/Facturas/Listado/ListFacturas.tsx';
import { FormAltaProd } from './components/Productos/FormAlta/FormAltaProd.tsx';
import { FormModifProd } from './components/Productos/FormModif/FormModifProd.tsx';
import { FormAltaCli } from './components/Clientes/FormAlta/FormAltaCli.tsx';
import { FormModifCli } from './components/Clientes/FormModif/FormModifCli.tsx';
import { FormAltaAlbar } from './components/Albaranes/FormAlta/FormAltaAlbar';
import { FormModifAlbar } from './components/Albaranes/FormModif/FormModifAlbar.tsx';
import { FormAltaFactu } from './components/Facturas/FormAlta/FormAltaFactu.tsx';
import { FormModifFactu } from './components/Facturas/FormModif/FormModifFactu.tsx';

//Componente funcional
function App() {    
  return (    
    
      <div>                
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
            <Route path="/clientes" element={<ListClientes />}>
              <Route index element={<ListClientes />} />
              <Route path="alta" element={<FormAltaCli />} />
              <Route path="modif/:id" element={<FormModifCli />} />
            </Route>
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
      </div>    
    
  )    
}

export default App
