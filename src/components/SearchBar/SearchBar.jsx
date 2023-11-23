import { useState } from "react"

const SearchBar = ({ products, setProducts }) => {

    const [productsBackup, setProductsBackup] = useState(products)

    const getValue = event => {
        const { value } = event.target
        const productsFiltered = productsBackup.filter(e => e.name.startsWith(value))
        setProducts(productsFiltered)
    }

    return (
        <div className="SearchBar">
            <label> Search</label>
            <input type="text" onChange={getValue} />
        </div>
    )
}

export default SearchBar