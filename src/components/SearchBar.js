import { useState } from "react"
import Data from './../data.json';
import ProductTable from "./ProductTable";

function SearchBar() {
    const [query, setQuery] = useState("")

    const filterArray = Data.filter((product => {
        if (query === '') {
            return product
        } else if (product.name.toLowerCase().includes(query.toLocaleLowerCase())) {
            return product
        }
    }))

    return (
        <div>
            <input placeholder="Enter search query" onChange={event => setQuery(event.target.value)} />
            {
                <div >
                    <ProductTable props={filterArray} />
                </div>
            }
        </div>
    )
}


export default SearchBar