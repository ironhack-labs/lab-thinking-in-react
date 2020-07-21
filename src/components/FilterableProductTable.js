import React, { useState } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = props => {

    const initialState = {
        currentSearch: ""
      }
    
      const [state, setState] = useState(initialState)
    
      const handleSearch = (value) => {
        setState(state => ({
            ...state,
            currentSearch: value
        }))
    }

    const jsData = JSON.parse(JSON.stringify(props.products))

    const filteredProducts = jsData.data.filter(product => {
        return product.name.toUpperCase().indexOf(state.currentSearch.toUpperCase()) !== -1
    })
    
    return (
        <div className="container">
            <SearchBar search={handleSearch} searchInState={state.currentSearch} />
            <ProductTable products={filteredProducts} />
        </div>
    )
}

export default FilterableProductTable
