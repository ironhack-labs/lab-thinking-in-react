import { useState } from "react"


function SearchBar({ filterProducts }) {
    const [name, setName] = useState()

    function handlerNameValue(e) {
        const { value } = e.target
        setName(value)
        filterProducts(value)
    }

    return (
        <form>
            <input type="text" value={name} onChange={handlerNameValue} />

        </form>
    )

}


export default SearchBar