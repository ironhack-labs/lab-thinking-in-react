import React, {useState, createContext} from 'react';
import data from '../data.json';



export const LeContexte = createContext();

export const LeProvedore = (props) =>{
    //console.log(data, "hola")
    data["filteredData"] = data.data;
    const [losdatos, setlosDatos] = useState(data);
    //const [listaFiltrada, setListaFiltrada] = useState(data.data);
    
    return(
        <LeContexte.Provider value={[losdatos, setlosDatos]}>{props.children}</LeContexte.Provider> 
    )
}