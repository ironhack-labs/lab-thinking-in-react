import React, {useState} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function FilterableProductTable(props) {
    const [search, setSearch] = useState('');
    const [onstock, setOnstock] = useState(false);
    const [products, setProducts] = useState(props.products.data)

    const submitForm = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    const handleClick = (e) => {
        setOnstock(!onstock)
    }

    const productsToShow = products.filter(product => {
        if (onstock) {
            return product.name.toLowerCase().includes(search) && product.stocked;
        } else {
            return product.name.toLowerCase().includes(search)
        }
        
    });

    return (
        <div className="App">
            <h1>IronStore</h1>
            <SearchBar submitForm={submitForm} handleChange={handleChange} handleClick={handleClick} search={search}/>
            <ProductTable products={productsToShow} />
        </div>
    );
};

export default FilterableProductTable;