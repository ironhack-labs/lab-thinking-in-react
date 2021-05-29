import React, {useState} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import ShowStocked from './ShowStocked'
import Navbar from './Navbar'

export default function FilterableProduct({data}) {
    // const {category, price, stocked, name, id} = data
    console.log('filterable product', data)

    const [productName, setProductName] = useState('')
    const [productStock, setProductStock] = useState(false)
    
    console.log('product:', productName)

  
    const filteredArray = data.filter(e => {
        return e.name.toLowerCase().includes(productName.toLowerCase())
    })
    console.log('filtered Array:', filteredArray)

    const stockArray = filteredArray.filter(e => {
        if(productStock === true){
            return e.stocked
        }
        return e
    })

    console.log('stock array',stockArray)
    
    return (
        <div className='border-0 rounded bg-light'>
            <Navbar/>
            <SearchBar onChange={(value) => setProductName(value)}/>
            <ShowStocked
            productStock={productStock}
            onChange={(value) => setProductStock(value)}/>
            <ProductTable search={stockArray}/>
        </div>
    )
}
