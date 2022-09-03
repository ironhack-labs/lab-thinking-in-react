import { useState } from "react";
import SearchBar    from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData     from "../data.json";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    //const [checkbox, setcheckbox] = useState(false);

    function filter() {
        const checkbox = document.querySelector("#checkbox").checked
        const searchBar = document.querySelector(".searchBar").value

        // Filtre le champ texte
        let filteredProducts = [ ...jsonData ].filter(product => product.name.toLowerCase().includes(searchBar.toLowerCase()))

        // Si Checkbox est coché => refiltre par dessus sinon ne fait rien
        checkbox && (filteredProducts = filteredProducts.filter(product => product.inStock))
        
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