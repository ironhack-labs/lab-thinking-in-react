import React, {useState} from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

const FilterableProductTable = (props) => {

    const [query, setQuery] = useState('')
    const [stock, setStock] = useState(false)

    const onSearch = (item) => {
        setQuery(item)
    }

    const onStock = (bool) => {
        setStock(bool)
    }

    return (
        <>
            <header className="container-fluid">
                <h1>IronStore</h1>
            </header>
            <section className="container table-block">
            <h3><strong>products list</strong></h3>
                <SearchBar products={props.products} onSearch={onSearch} onStock={onStock} />
                <ProductTable products={props.products} querySearch={query} isStock={stock} />
            </section>
        </>
    )
}

export default FilterableProductTable