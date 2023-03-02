import { useState } from "react"

function SearchBar() {

    const [products, setProducts] = useState([])

    const handleChange = e => {
        console.log(e.target)
        // setProducts(e)
    }



    return (
        <div>
            <input value={products} onChange={handleChange} type="text" />
        </div>
    )
}

export default SearchBar