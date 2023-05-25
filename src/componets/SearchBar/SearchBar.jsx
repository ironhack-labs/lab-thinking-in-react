import { useState } from "react"

const SearchBar = ({ filterProductsByName, filterProductsByStock }) => {

    const [nameQuery, setNameQuery] = useState("")
    const [hasStock, setHasStock] = useState(false)



    const handleQueryChange = e => {
        const inputValue = e.target.value
        setNameQuery(inputValue)
        filterProductsByName(inputValue)
    }

    const handleFilterStock = e => {
        const isChecked = e.target.checked;
        setHasStock(isChecked)
        filterProductsByStock(isChecked)
    }
    console.log(hasStock)

    return (
        <form>
            <input type="text" placeholder="Introduce un artículo..." value={nameQuery} onChange={handleQueryChange} />
            <br />
            Only show products in stock<input type="checkbox" checked={hasStock} onChange={handleFilterStock} />

            {/* Tuvo Oscar?: <input type="checkbox" checked={hasOscars} onChange={handleOscarsInput} /> */}
        </form>
    )
}
export default SearchBar
