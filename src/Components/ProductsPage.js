import {useState} from "react"
import jsonData from "../data.json"
import {ProductTable} from "./ProductTable.js"
import {SearchBar} from "./SearchBar"
export const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData)
    const [search,setSearch] = useState([])
    const [findStock, setFindStock] = useState(false)
    
    const Stock =(stock)=>{
        if(stock){
            const Products = products.filter(product=>product.inStock)
            setProducts(Products)
            console.log(products)
        } else{
            setProducts(jsonData)
        }
    }
    const Search=(word)=>{
        if(word.length>0){
            const Products = products.filter(product=>product.name.toLocaleLowerCase().includes(word.toLocaleLowerCase()))
            setProducts(Products)
        } else{
            setProducts(jsonData)
        }

    }
  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar Search={Search} Stock={Stock} />
        <ProductTable setProducts={setProducts} products={products} search={search} setSearch={setSearch} />
        
    </div>
  )
}
