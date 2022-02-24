import { useState } from "react"

const SearchBar = ({ showFilteredProducts, showStockProducts }) => {

    const [searchName, setSearchName] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const handleForm = e => {
        setSearchName(e.target.value)
        showFilteredProducts(e.target.value)
    }

    const checkedForm = e => {
        setIsChecked(e.target.checked)
        showStockProducts(e.target.checked)
    }

    return (
        <>
            <h3>Search</h3>
            <input value={searchName} onChange={handleForm} />
            <input type="checkbox" checked={isChecked} onChange={checkedForm} />
        </>
    )
}

export default SearchBar