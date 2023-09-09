import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Imagenes from "./components/Imagenes";
import EditarImagen from "./components/EditarImagen";
import AgregarImagen from "./components/AgregarImagen";
import NavScrollExample from "./components/NavBar";
// import Inicio from './components/Inicio';
import CrearUsuario from './components/CrearUsuario';
import EditarUsuario from './components/EditarUsuario';
import Nasa from './components/Nasa';
import LoginPage from './Pages/LoginPage';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<NavScrollExample/>}>
          <Route path='/' element={<Nasa />}/>
          {/* <Route path='/home' element={<Inicio />}/>  */}
          <Route path='/login' element={<LoginPage />}/>
          <Route path='imagenes' element={<Imagenes />}/>
          <Route path='/editar/' element={<EditarImagen />}/>
          <Route path='/agregar' element={<AgregarImagen />}/>
          <Route path='/crear' element={<CrearUsuario />}/>
          <Route path='/cambio' element={<EditarUsuario />}/>
          <Route path='*' element={ <Navigate replace to="/"/> }/>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
