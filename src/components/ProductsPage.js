import { useState } from "react";
import jsonData from '../data.json'
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [query, setQuery] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar setQueryProp={setQuery} setCheckboxProp={setCheckbox} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table>
                    <thead>
                        <tr>
                            <th><strong>Name</strong></th>
                            <th><strong>Price</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductTable products={products} queryProp={query} checkboxProp={checkbox} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsPage;
