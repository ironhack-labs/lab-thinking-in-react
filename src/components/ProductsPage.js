import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [allProducts, setAllProducts] = useState(jsonData);

    function filterProducts(query) {
        const allProductsCopy = [...allProducts];
        const filteredProducts = allProductsCopy.filter(product => QueryInAnyProperty(product, query));
        console.log("filteredProducts: ", filteredProducts);
        setProducts(filteredProducts);
    }

    function QueryInAnyProperty(object, searchTerm) {
        let valueToLowerCase;
        let searchTermToLowerCase = searchTerm.toLowerCase();
        console.log("searchTerm to LowerCase: ", searchTermToLowerCase);
        for (let key in object) {
            if (typeof object[`${key}`] === "string") {
                console.log("object[`${key}`] :", object[`${key}`])
                console.log("typeof object[`${key}`:", typeof object[`${key}`]);
                valueToLowerCase = object[`${key}`].toLowerCase();
                if (valueToLowerCase.includes(searchTermToLowerCase)) return true;
            } else {
                continue;
            }
        }
        return false;
    }

    return (
        <div>
            <h1>IronStore</h1>
            <div className="searchBar">
                <SearchBar products={products} filterProducts={filterProducts} /> 
            </div>
            <div>
                <ProductTable products={products} />
            </div>
        </div>



    )
}

export default ProductsPage;