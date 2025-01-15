import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
    const [ products, setProducts ] = useState( jsonData );
    const [ search, setSearch ] = useState("");

    //Search:
    const handleSearch = ( searchText ) => {
        setSearch( searchText );
        filterProducts( searchText );
    }

    //Filter products:
    const filterProducts = ( searchText ) => {
        //New filtered list:
        const filteredProducts = jsonData.filter((product) => 
            product.name.toLowerCase().includes( searchText.toLowerCase() )
        )
        //Set products = filteredProducts
        setProducts( filteredProducts );
    }
    return (
        <div>
            <h1> IronStore </h1>
            <SearchBar search = { search } onSearch={ handleSearch }/>
            <ProductTable products = { products } />
        </div>
    );
}

export default ProductsPage;