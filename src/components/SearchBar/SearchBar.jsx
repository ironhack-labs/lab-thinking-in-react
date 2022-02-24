import { useState } from "react"

function SearchBar({ products }) {

    const [productsName, setProductsName] = useState("")
    const handleInput = e => setProductsName(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        setProductsName('')



    }

    return (
        <div>

            <h2>Search</h2>
            <form onSubmit={handleSubmit}>

                <input type="text" value={productsName} onChange={handleInput}></input>




            </form>

        </div>
    )

}

export default SearchBar