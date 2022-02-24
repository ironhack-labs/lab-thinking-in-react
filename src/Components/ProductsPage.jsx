import { useState } from "react"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData from "./../data.json"


function ProductsPage() {


    const [products, setProducts] = useState(jsonData);
    const [productsCopy, setCopy] = useState(jsonData)

    function filter(str) {

        let filteredProducts

        str ? filteredProducts = productsCopy.filter(elm => elm.name.includes(str)) : filteredProducts = productsCopy


        setProducts(filteredProducts)
    }
    function checkBox(popino) {
        let filteredProducts

        popino ? filteredProducts = productsCopy.filter(elm => elm.inStock === true) : filteredProducts = productsCopy


        setProducts(filteredProducts)

    }


    return (

        <div>
            <h1>PopinoTienda</h1>
            <div><SearchBar checkBox={checkBox} filter={filter} /></div>
            <div><ProductTable products={products} /></div>
        </div>
    )

}

export default ProductsPage