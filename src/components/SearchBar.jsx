import { useState } from "react";
import ProductTable from "./ProductTable";

function SearchBar(props){

        const [filterName, setFilterName]= useState('')
        const filteredNames = [...props.products]
        filteredNames.filter((oneProduct)=>{return oneProduct.name === filterName})
        console.log(filterName)

    return (
        <div>
            <input style={{margin:'20px', border:'solid 0.5px', width: '200px', height:'30px', backgroundColor:'#DFF4FB'}} type="text" value={filterName} onChange={(e)=>setFilterName(e.target.value)} placeholder="Search..." />
        
        </div>
    )
}

export default SearchBar;