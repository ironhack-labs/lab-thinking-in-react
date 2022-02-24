import ProductRow from "./ProductRow"
import data from "../data.json"
import React from "react"

const ProductTable = props => {

    const [filteredProducts, setFilteredProducts] = React.useState(data)
    const [searchInput, setSearchInput] = React.useState("")
    const [inStock, setInStock] = React.useState(false)

    React.useEffect(() => {
        let regex = searchInput === "" ? new RegExp(".+") : new RegExp(searchInput, "i")
        setFilteredProducts(data.filter(product => {
            return (product.name.match(regex) && (!inStock || product.inStock))}))
    }, [searchInput, inStock])


    return (
        <div>
            <input type="text" placeholder="Search for Items Here" onChange={(e)=>setSearchInput(e.target.value)}/>
            <input style={{marginLeft: 15}} type="checkbox" onChange={() => setInStock(!inStock)} />
            <label>Only in Stock</label>
            <div className="tableDiv">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(product => <ProductRow key={product.id} product={product}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductTable