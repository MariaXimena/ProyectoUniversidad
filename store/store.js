import { createStore } from "redux";

const inicialState = {
    key:"",
    basedatos:"",
    datospersonales:"",
    dermatologos: [{id:1, nombre:"Pedro", correo:"proyectoskinusco@gmail.com"},{id:1, nombre:"Pedro", correo:"proyectoskinusco@gmail.com"},{id:2, nombre:"Ximena", correo:"mariaximenarodriguezborda@gmail.com"}],
    usuario: ""
}


const reducer = (state = inicialState, action) =>{
    if (action.type === "Agregar referencia"){
        return {
            ...state,
            basedatos:action.bd

        }
    }
    if (action.type === "Agregar datos"){
        return {
            ...state,
            datospersonales:action.datos
    
        }

    }
   
    


    return state
}
    

export default createStore(reducer)