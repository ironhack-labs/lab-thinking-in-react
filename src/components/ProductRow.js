import React, {useState} from 'react'
import jsondata from '../data.json'

export default function ProductRow() {

   const productActualizado = jsondata.data.map((e) =>{
    if (!e.stocked){
        return{   
            ...e,
            color: "red"
        }
    }else{
        return{   
            ...e,
            color: "green"
        }
    }
   })

   const [products, setProducts]= useState(productActualizado) 

   const [search, setSearch] = useState({
    busqueda:""
    });

    const [filtro, setFiltro] = useState(products)

    function motorBusqueda(event){
        const filtrado = products.filter((e) => {
            return e.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        
        setFiltro(
            filtrado
        )
        console.log(filtro)
    setSearch(
        {   ...search,
            [event.target.name]: event.target.value})
    }

    return (
    <>
        <div>
        <input name="busqueda" value={search.busqueda} onChange={(event) => motorBusqueda(event)}/>
        </div>
    {
    filtro.map((e) => {
        return(
        <tr >
            <td style={{color: e.color}}>{e.name}</td>
            <td>{e.price}</td>
        </tr>
        )
    })
    }
    </>
    )
}