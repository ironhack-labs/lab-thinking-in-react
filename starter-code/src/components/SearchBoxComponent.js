import React, {useState,useContext, useEffect} from 'react';
import {LeContexte} from './dataContext';


const SearchBoxComponent = () =>{
    const [searchText, setSearchText] = useState("");
    const [inStock, setInStock] = useState(false);
    const [losdatos, setlosDatos] = useContext(LeContexte);

    const filtrarArticulos = (e) => {
        setSearchText(e.target.value)
        let datosActualizados = losdatos;
        datosActualizados.filteredData = datosActualizados.data.filter(function(query)
            {return query.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1});
        setlosDatos({...datosActualizados})
        console.log(losdatos)
    };

    const filtrarInStock = (e) => {
        setInStock( !inStock )
        let enEstok = e.target.checked
        console.log(enEstok)
        let datosActualizados = losdatos;
        datosActualizados.filteredData = datosActualizados.data.filter(function(query)
            {return enEstok ? query.stocked : true});
        setlosDatos({...datosActualizados})
        console.log(losdatos)
    };


    return(
        <div>
            <h1>Search</h1>
            <input type= "text" name="busqueda" value={searchText} onChange={(e)=>filtrarArticulos(e)}/>
            <input type="checkbox" name="chkOnStock" value={inStock} onChange={(e)=>filtrarInStock(e)}/>Only show products on stock        
            
        </div>
    )       
}

export default SearchBoxComponent;