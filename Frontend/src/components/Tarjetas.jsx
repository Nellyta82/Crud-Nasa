import React from "react";

function Tarjetas(props){
    return(
        <div className="card" >
            <img src={props.url} className="card-img-top" alt={props.titulo}/>
            <div class="card-body">
                <p class="card-text">{props.titulo}</p>
                <p class="card-text">{props.fecha}</p>
                <p class="card-text">{props.explicacion}</p>
            </div>
        </div>
    );
}

export default Tarjetas;