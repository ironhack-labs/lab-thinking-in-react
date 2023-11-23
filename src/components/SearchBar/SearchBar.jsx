import { useState } from 'react'

const SearchBar = ({ filterProducts }) => {
    const [firstLetter, setFirstLetter] = useState('')
    console.log("----", firstLetter)
    const handleChangeSearch = e => {
        setFirstLetter(e.currentTarget.value)
        filterProducts(e.currentTarget.value)

    }
    return (
        <div className="SearchBar">
            <input type="text" onChange={handleChangeSearch} />
        </div>
    )
}

export default SearchBar