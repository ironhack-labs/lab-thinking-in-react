import ProductTable from "./product-table";
import SearchBar from "./search-bar";

import { useState } from "react";

function ProductsPage() {
    const [search, setSearch] = useState('');
    const [stock, setStock] = useState(false);

    return (
        <div className="m-auto d-flex flex-column align-items-center justify-content-center border border-primary rounded-5 w-75 gap-2 p-5 shadow">
            <h1>Ironstore</h1>


            <SearchBar setSearch={setSearch} setStock={setStock} />
            <ProductTable stock={stock} search={search} />
        </div>
    )
}

export default ProductsPage;