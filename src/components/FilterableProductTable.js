import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
///////PRICPAL////////
//////////////////////

export default function FilterableProductTable(props) {


    return (
        <div>
            <SearchBar articulos={props.articulos} 
            funcSetArt={props.funcSetArt}
            articulosABuscar= {props.articulosABuscar} />
            
            <ProductTable articulos = {props.articulos} />
        </div>
    )
}
