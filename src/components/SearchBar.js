import react from 'react';
import { useState } from 'react';
import jsonData from '../data.json'

function SearchBar () {


    const [filteredProductArray, setFilteredProductArray] = useState(jsonData);
    const [products, setProducts] = useState(jsonData);



    const updateSearch = (event) => {
        const newProductArray = products.filter((individualProduct) => {
          return individualProduct.name
            .toLowerCase()
            .includes(event.currentTarget.value.toLowerCase());
        });
        setFilteredProductArray(newProductArray);
      };

//how to pass newProductArray into ProductTable???

return(
    <div className="searchBar">
    <form>
<label>Search Products </label>
        <input type="text" onChange={updateSearch} />
        </form>
</div>
)
}

export default SearchBar;