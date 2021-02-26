import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default function FilterableProductTable (props) {
    const  [product, setProduct] = useState(props.products);
    const [checkedBox, setcheckedBox] = useState(false);
    const [typeWord,setTypeWord] = useState("")
    function filterProd(){
        return props.products.filter((product) => {
            return (
              (checkedBox ? product.stocked : true) &&
              product.name.toLowerCase().includes(typeWord.toLowerCase()) 
            );
          });
    }

    const prod= filterProd();
    return (
        <div>
            <SearchBar setTypeWord={setTypeWord} checkedBox={checkedBox} setcheckedBox={setcheckedBox} />
            <ProductTable products={prod} />
        </div>
    )
}
