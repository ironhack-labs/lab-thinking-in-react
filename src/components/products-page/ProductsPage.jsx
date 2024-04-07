import { useState } from "react";
import jsonData from "../../data.json";
import ProductTable from "../product-table/ProductTable";
import SearchBar from "../search-bar/SearchBar";


function ProductPage ( ){
    const [searchTerm, setSearchTerm] = useState("");
    const [checkProducts, setCheckProducts] = useState(false)

    const handleCheck = (event) => {
        setCheckProducts(event.currentTarget.checked)
    }
    const handleSearchChange = (event)=>{
        setSearchTerm(event.currentTarget.value.toLowerCase())      
    }

  const products = jsonData 
  .filter((data) => data.name.toLowerCase().includes(searchTerm))
  .filter((data) => checkProducts ? data.inStock : true)
    return ( 
        <>
        <div>
        <h1>IronStore</h1>
        </div>
       <SearchBar onSearchTerm={handleSearchChange} onCheck={handleCheck}/>
        <ProductTable searchTerm={products}/>
        </>
    )
}

export default ProductPage;
//tengo que cambiar el array que se muestra o no 
//se puede modificar searchTerm solo cuando se muestra y luego que vuelva a su estado 
//Esto significa que todos los elementos del array jsonData pasarán el filtro, independientemente del valor de data.inStock, porque el filtro siempre devuelve true. Por lo tanto, si checkProducts es falso, no habrá restricciones adicionales sobre los productos en stock y todos los productos se mostrarán en la lista.