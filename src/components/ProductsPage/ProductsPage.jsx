import { useState } from 'react';
import jsonData from './../../data.json';
import { SearchBar, ProductTable } from '../../components'

const ProductsPage = ({onClick}) => {

    const [products, setProducts] = useState(jsonData);
    const [searchLetter, setLetter] = useState('');
    const [checkboxClick, setCheckboxClick] = useState(false);


    const searchProduct = (event) => {
        let listProducts = jsonData.filter((product)=>product.name.includes(event));
        setLetter(searchLetter);
        setProducts(listProducts);
    }

    const productInStock = (event) => {
        if(!event){
            setProducts(jsonData);
            return setCheckboxClick(event);
        }
        let listProducts = jsonData.filter((product)=>product.inStock === true);
        setProducts(listProducts);
        setCheckboxClick(event);
    }

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar 
                onChange = {(e) => searchProduct(e.target.value)}
                click = {(e) => productInStock(e.target.checked)}
                stateCheckBox = {checkboxClick}
                value = {searchLetter}
            />              
            <ProductTable 
                products = {products}
            />
        </div>
    );
};

export default ProductsPage;