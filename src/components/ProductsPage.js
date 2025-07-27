import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from "../data.json"
import { useState } from "react";

function ProductsPage() {
    const [searchValue, setSearchValue] = useState("");
    const [onlyShowInStock, setOnlyShowInStock] = useState(false);

    return <div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} onlyShowInStock={onlyShowInStock} setOnlyShowInStock={setOnlyShowInStock}/>
        <ProductTable products={products} searchValue={searchValue} onlyShowInStock={onlyShowInStock}/>
    </div>
}

export default ProductsPage;