import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


 function NavScrollExample() {

   return (
    <> 
     <Navbar expand="lg" className="bg-body-tertiary">
       <Container fluid id="container">
         <Navbar.Brand href="/"></Navbar.Brand>
           <Nav id="nav"
             className="me-auto my-2 my-lg-0"
             style={{ maxHeight: '100px' }}
           >
             <Nav.Link id="lista" href="/nasa">Nasa</Nav.Link>
             <Nav.Link id="lista" href="/home">Inicio</Nav.Link>
             <Nav.Link id="lista" as={Link} to="/imagenes">Imagenes</Nav.Link>
             <Nav.Link id="lista" href="/agregar">Agregar Imágenes</Nav.Link>
             <Nav.Link id="lista" href="/editar">Editar Imágenes</Nav.Link>
           </Nav>
           <Form className="d-flex" id='form'>
             <Form.Control
               type="search"
               placeholder="Search"
               className="me-2"
               aria-label="Search"
             />
             <Button variant="outline-success">Search</Button>
           </Form>
           
       </Container>

     </Navbar>

<section>
<Outlet></Outlet>
</section>

</>
     
     );
   
 }
 

 export default NavScrollExample;

// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';


// const Navbar = () => {
//   const [logeado, setlogin] = useState(false)
//   const [usuario, setUsuario] = useState({})

//   const login =()=>{
//     const usuarios = JSON.parse(localStorage.getItem('Usuario'))
//     if(!usuario){
//       return
//     }else{
//       setUsuario(usuarios)
//       setlogin(usuarios)
//     }
//   }

//   useEffect(()=>{
//     login()
//   },[])// eslint-disable-line react-hooks/exhaustive-deps

//   const logout=()=>{
//     localStorage.clear('Usuario')
//     window.location.href='/'
//   }

//     return (
//         <div>
//           <nav className="navbar fixed-top top-0 navbar-expand-lg navbar-dark p-md-3">
//             <div className="container-fluid">
//               <a className="navbar-brand text-dark" href="/">Imágenes de la Nasa</a>
//               <button
//                 className="navbar-toggler text-dark"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                     <a className="nav-link text-dark active" aria-current="page" href="/imagenes"
//                       >Imágenes</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link text-dark active" href="/agregar">Agregar Imágenes</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link text-dark active" href="/editar">Editar Imágenes</a>
//                   </li>
//                   {/* <div className="d-flex">
//                     <Boton1 link='/turnos' name="Turnos" />
//                   </div> */}
//                   {
//                     logeado? 
//                     <div className="dropdown ms-md-1">
//                       <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                       {usuario?.user.nombre}
//                       </button>
//                       <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton1">
//                         <li><a className='dropdown-item' href="/crear">Crear Usuario</a></li>
//                         <li><button className='dropdown-item' onClick={logout}>Cerrar Sesión</button></li>
//                       </ul>
//                     </div>
//                     // <li className="nav-item d-flex align-items-center"><a className='a-usuario' href='/perfil'> {usuario?.user.nombre} </a></li> : 
//                     :                  
//                     <div className="d-flex">
//                       <button link='/login' name="Iniciar Sesion" />
//                     </div>

//                   }
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//     );
// };

// export default Navbar;


              
          