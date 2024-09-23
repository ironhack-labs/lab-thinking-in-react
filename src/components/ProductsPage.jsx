import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import dataJSON from "./../data.json"

function ProductPage(){

    const [products, setProducts] = useState(dataJSON)
    const [searchWord, setSearchWord] = useState("");
    const [filterStock, setFilterStock] = useState(false);

    return(
        <div id="product-page" className="flex-column">
            <h1>IronStore</h1>
            <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} setFilterStock={setFilterStock}/>
            <ProductTable products={products} searchWord={searchWord} filterStock={filterStock}/>
        </div>
    );

}

export default ProductPage;