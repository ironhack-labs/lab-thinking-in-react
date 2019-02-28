import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({products, onChangeSearch, onChangeStock }) => (
    <div>
        <SearchBar onChangeSearch={onChangeSearch} onChangeStock={onChangeStock} />
        <ProductTable products={products} />
    </div>
)

export default FilterableProductTable 
