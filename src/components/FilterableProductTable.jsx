import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

const FilterableProductTable = ({products}) => {
    const [productList] = useState(products);
    const [search, setSearch] = useState([]);
    const [displayResults, setDisplayResults] = useState(false);

   
    const handleSearch = (search) => {
        const productListCopy = [...productList];
        const filteredList = productListCopy.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
    
        });
        setDisplayResults(true);
        setSearch(filteredList);
    
      };
   

   return (
        <div>
<SearchBar searchTerm={handleSearch} />
{
    displayResults ?
    <ProductTable productList={search}/>
:
<ProductTable productList={products}/>

}
        </div>
    )
}

export default FilterableProductTable;

