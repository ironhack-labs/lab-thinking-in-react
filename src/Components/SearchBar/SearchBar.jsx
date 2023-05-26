import { useState } from "react"
import "./SearchBar.css"



const SearchBar = ({ filterProducts }) => {
    console.log(filterProducts)
    const [prodcutQuery, setProductQuery] = useState("")

    const handleProductQuery = e => {
        const { value } = e.target
        setProductQuery(value)
        filterProducts(value)

    }


    return (
        <form className="MovieSearch">
            <input type="text" placeholder="Introduce un título..." value={prodcutQuery} onChange={handleProductQuery} />
        </form>

    )
}



export default SearchBar