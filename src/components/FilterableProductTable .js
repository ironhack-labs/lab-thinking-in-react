import React, {useState} from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function FilterableProductTable(props){

const [data, setData] = useState(props.children);    

    return (
      <div>
        <SearchBar>{[props.children,setData]}</SearchBar>
        <ProductTable>{data}</ProductTable>
      </div>
    );
}

export default FilterableProductTable; 