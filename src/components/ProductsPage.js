import { useState } from "react";
import SearchBar    from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData     from "../data.json";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    function filter(event) {
        const checkbox = event.target.checked;

        const productsCopy = (typeof(event.target.value === "string")) ? [ ...jsonData ] : [ ...products ];
        let filteredProducts = productsCopy.filter(product => {
            const filtered = product.name.includes(event.target.value);

            return (checkbox ? filtered && product.inStock : filtered);
        });

        setProducts(filteredProducts);
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filter={filter}/>
            <ProductTable products={products}/>
        </div>
    );
}

export default ProductsPage;