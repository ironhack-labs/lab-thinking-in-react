import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar'



const FilterableProductsTable = props => {
    console.log(props)

    const initialState = {
        data: [...props.products],
        displayOnlyInStock: false,
        filter: ''
      }

    const [state, setState] = useState(initialState)
    
    const toggleStockFilter = () => {
        setState({
            ...state,
            displayOnlyInStock: !state.displayOnlyInStock
        })
    }

    const filterStockProducts = () => {
        return state.data.filter(product => state.displayOnlyInStock ? product.stocked : true)
    }

    const searchProduct = (searchParam) => {
        setState(state => ({
            ...state,
            filter: searchParam
        }))
    }
      
    return (
        <Container>
            <h1 style={{textAlign: 'center'}}>IronStore</h1>
            <div>
            <SearchBar showInStock={toggleStockFilter} searchProduct={searchProduct}/>
            <ProductsTable products={filterStockProducts()} searchParam={state.filter}/>
        </div>
        </Container>
        
    )
}

export default FilterableProductsTable


