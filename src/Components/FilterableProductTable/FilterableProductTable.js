import React, {useState} from 'react';
import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';

const FilterableProductTable = ({products}) => {
const [keyWord, setKeyword] = useState('');
const [stock, setStock] = useState(products);

// eslint-disable-next-line array-callback-return
const filtered = stock.filter((product, i, array)=> {
            if (keyWord === '') {
                        return product;
                      } 
                      else if(product.name.toLowerCase().includes(keyWord.toLowerCase())){
                        return product;
                      }
        })

return (
    <div>
        <h1>IronStore</h1>
        <SearchBar setKeyword={setKeyword} setStock={setStock} stock={products}/>
        <ProductTable products={filtered} />


    </div>
)
}

export default FilterableProductTable;

