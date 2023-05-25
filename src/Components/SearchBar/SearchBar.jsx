import { useState } from "react"

const SearchBar = ({ filterProducts }) => {
    const [nameQuery, setNameQuery] = useState('')
    const handleQueryChange = e => {
        const inputValue = e.target.value
        setNameQuery(inputValue)               // OJO las actualizaciones de estado son asincronas, no bloqueantes       
        filterProducts(inputValue)
    }
    return (
        <form className="productSearch">
            <input type="text" placeholder="Introduce un producto..." value={nameQuery}
                onChange={handleQueryChange} />
        </form>
    )


}
export default SearchBar
