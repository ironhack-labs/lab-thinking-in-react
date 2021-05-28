import React, { useState } from 'react'
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

export const FilterableProductTable = (props) => {

    console.log(props);
    const [data, setdata] = useState(props.products)
    const filtrar = (val) => {

        const newArray = props.products.filter((item) => {
            return item.name.toLowerCase().includes(val.toLowerCase());
          });
          setdata(newArray);
      
         
     }

    return (
        <div className="container">
            <div>
                <SearchBar filtrar={filtrar}/>
            </div>

            <div>
                <ProductTable data={data}/>
            </div>
            
        </div>
    )
}