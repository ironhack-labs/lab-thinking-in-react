import ProductTable from "../product-table/product-table";
import SearchBar from "../search-bar/search-bar";

import { useState } from "react";
import jsonData from "../../data.json";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <div>
                <h1 className="mt-5">IronStore</h1>
            </div>
            <SearchBar
                search={search}
                onSearch={setSearch}
                className="mb-2"
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <ProductTable
                products={products}
                search={search}
                isChecked={isChecked}
            />
        </>
    );
}

export default ProductsPage;