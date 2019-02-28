import React,{Component} from "react"
import Data from "../data"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable"

let FilterableProductTable = ({products,onChangeSearch,onChangeStock}) => (
    <div>
        <SearchBar onChangeSearch={onChangeSearch} onChangeStock={onChangeStock}/>
        <ProductTable products ={products} />
    </div>
)

export default FilterableProductTable