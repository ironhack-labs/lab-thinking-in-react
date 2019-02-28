import React from 'react'
import SearchBar from './SearchBar'
import Productable from './ProducTable'

let FilterableProductTable = ({products, onChangeSearch, onChangeStock }) => (
    <div>
        <SearchBar onChangeSearch={onChangeSearch} onChangeStock={onChangeStock} />
        <Productable products={products} />
    </div>
)

export default FilterableProductTable 