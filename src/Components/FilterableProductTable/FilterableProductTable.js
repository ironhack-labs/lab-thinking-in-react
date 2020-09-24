import React from 'react'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable/ProductTable"

export default function FilterableProductTable(props) {
    console.log("1", props)
    return (
        <div>
            <h1>IronStore</h1>
            { <SearchBar
                setQuery={props.setQuery}
                query={props.query}
                products={props.products}
                tick={props.tick}
                tickQuery={props.tickQuery}
                setTickQuery={props.setTickQuery}
            />}

            { <ProductTable products={props.products}
                query={props.query}
                tickQuery={props.tickQuery} />}

        </div>
    )
}
