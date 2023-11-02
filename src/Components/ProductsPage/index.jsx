import jsonData from "../../data.json"
import { useState } from "react"
import SearchBar from "../SearchBar"
import ProductRow from "../ProductRow"
import ProductTable from "../ProductTable"
import "../../App.css";

function ProductsPage(){
    const [products, setProducts] = useState(jsonData)
    const filterProducts = name =>{
        const filteredProducts = name !== "" ? products.filter(product=>product.name.toLowerCase().includes(name.toLowerCase())) :  jsonData;
        setProducts(filteredProducts);
    };
    const isStock = checked =>{
        const stockProducts = checked ? products.filter(stock=>stock.inStock === true) :  jsonData;
        setProducts(stockProducts);
    }

    return(
        <div>
            <h1 id="heading">IronStore</h1>
            <SearchBar filter={filterProducts} stock={isStock}/>
            <ProductTable>
                {products.map((product, index)=>{
                    return (<ProductRow key={index} products={product}/>)
                })}
            </ProductTable>
        </div>
    )
}

export default ProductsPage