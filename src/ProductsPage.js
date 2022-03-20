import { useState, useEffect } from 'react';
import jsonData from './data.json'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {

    const [state, setState] = useState([...jsonData])
    const [searchItem, setSearchItem] = useState('');
    const [filter, setFilter] = useState(false)

    useEffect(handleSearch, [searchItem]);
    useEffect(handleFilter, [filter]);

    
    function handleSearch() {

        const searched = [...state].filter((currentObj) => {
          return currentObj.name.toLowerCase().includes(searchItem.toLowerCase());
        })
        
        setState(searched);

        if (!searchItem) {
            setState([...jsonData]);
          }
    };

    function handleFilter() {

        if (filter === true) {
            const filtered  = [...state].filter((currentObj) => {
                return currentObj.inStock === true;
            })

            setState(filtered);
        }

        else {
            setState([...jsonData]);  
        }
    };


    return (
            <div>
                <div>
                    <h1>IronStore</h1>
                </div>
                <div>
                    <SearchBar
                        value = {searchItem}
                        onChange = {(event) => setSearchItem(event.target.value)}
                        checked = {filter}
                        onFilter = {(event) => setFilter(!filter)}
                        />
                </div>
                <div>
                    <ProductTable
                       batata = {state}
                    />
        
                </div>
            </div>
    );                 
};

export default ProductsPage;