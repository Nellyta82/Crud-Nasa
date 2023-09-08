import React from 'react';
import { useForm } from 'react-hook-form'

const Login = () => {

  const {register , handleSubmit} = useForm()

  const onSubmit = async(data) =>{
    const resp = await fetch("http://localhost:8080/nasa/auth/login" , {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()

    if(resp.ok===false){
      alert(json.message)
      return
    }else{
      const jsonStr = JSON.stringify(json)  
      localStorage.setItem("Usuario" , jsonStr)
      window.location.href='/crear' 
      }

    
  }


  return (
    <section className="bg-hero">
      <div className="formulario-contenedor-login">
        <form onSubmit={handleSubmit(onSubmit)} className= "form-className formulario-estilo d-flex flex-column">
            <h1 className="text-center fs-3 py-4 fw-bold">Login</h1>                    
            <input type="text" className="input-style my-3" name="email" id="email" placeholder="Email" {...register("email" , {required: true})}/>   
            <input type="password" className="input-style my-3" name="password" id="password" placeholder="Contraseña" {...register("contrasena")}/>           
            <button type="submit" className="boton-contacto-login my-5 py-2">Loguearse</button>
            <span className='text-center outline-non pb-5'>No tenes cuenta? <a  href='/crear'>Registrese Aca</a></span>                           
        </form>      
      </div>  
    </section>  
  );
};

export default Login;