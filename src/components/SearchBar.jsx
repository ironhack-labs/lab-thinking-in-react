import { useState } from "react"

const SearchBar = ({ filter }) => {
    const [productfinal, setProductsFinal] = useState('')
    function handleInput(e) {

        filter(e.target.value)
    }
    return (
        <>
            <h1> SearchBar</h1>
            <form >
                <input
                    type="search"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s"
                    onChange={handleInput}
                />
            </form>
        </>
    )

}

export default SearchBar