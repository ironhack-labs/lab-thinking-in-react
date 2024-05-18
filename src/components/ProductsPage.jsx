import { useState } from "react"
import jsonData from '/Users/zarolina/ironhack/labs/lab-thinking-in-react-vite/src/data.json'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"


const ProductsPage = ()=>{

    const [products, setProducts] = useState(jsonData)
    const [search, setSearch] = useState("")
    const [checkStock, setCheckStock] = useState(false)

 
    const handleSearch = (value)=> {
        const filteredProducts = jsonData.filter(product =>{
            return product.name.toLowerCase().includes(value.toLowerCase())
        });
        setProducts(filteredProducts)
        setSearch(value)
    }

    const handleCheckBox = (event)=>{
        if(event.target.checked){
        const checkFiltered = jsonData.filter(product => {
            return product.inStock ? true : false
        })
       setProducts(checkFiltered)
       }else {
        setProducts(jsonData)
       }
       setCheckStock(event.target.checked)


    }

  

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar products={products} searchValue={search} filterProducts={handleSearch} boxValue={checkStock} boxFilter={handleCheckBox} />
            <ProductTable products={products}/>
        </div>
    )
}

export default ProductsPage


