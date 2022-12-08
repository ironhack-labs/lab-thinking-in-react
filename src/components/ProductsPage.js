import { useState } from "react";
import jsonData from '../data.json';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


const ProductsPage = () => {

const [products, setProducts] = useState(jsonData)
const [productsCopy, setProductsCopy] = useState(jsonData)


const findProduct = (myInput) => {
    const foundProduct = productsCopy.filter((product) => {
        return product.name.toLowerCase().includes(myInput.toLowerCase())
    })
    setProducts(foundProduct)
}


const itemsStock = (checked) => {

    console.log(checked)
    if(checked){
        console.log('if')
        const stockItem = productsCopy.filter((product) => {
            return product.inStock === true;
            
        })
        setProducts(stockItem)
    } else {
        console.log('else')
        setProducts(productsCopy)
    }

    
    
}


return(
    <div>
        <h1>IronStore</h1>
        <SearchBar findProduct = {findProduct} itemsStock = {itemsStock}/>
        <ProductTable products = {products} />
    </div>
)
}

export default ProductsPage;