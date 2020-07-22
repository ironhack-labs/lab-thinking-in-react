import React, {useState} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function FilterableProductsTable(props) {
    const initialState = {
        products:props.products.data,
        filtro:props.products.data,
        inStock: false,
        stocked: props.products.data
    }
    const [productsList, setList] = useState(initialState)
    const handleChange = (e) => {
        var newItems = productsList.products.filter(item =>item.name.toLowerCase().includes(e.target.value))
        setList(productsList=> ({
            ...productsList,
            filtro: newItems,
        }))
    }
    const filterStocked = (e) => {
        var stock = productsList.inStock
        var inStockItems =[]
        if(productsList.inStock){
            inStockItems = productsList.filtro
        }else{
            inStockItems = productsList.filtro.filter(item =>item.stocked)
        } 
        setList(productsList=> ({
            ...productsList,
            stocked: inStockItems,
            inStock: !stock
        })) 
    }
    var productsShown = productsList.inStock?productsList.stocked:productsList.filtro
    return (
        <div>
            <h1>Iron Store</h1>
            <SearchBar onChange={handleChange} onClick={filterStocked}/>
            <ProductTable products={productsShown}/>
        </div>
    )
}

export default FilterableProductsTable
