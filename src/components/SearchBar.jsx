import React, {useState} from 'react'

const SearchBar = (props) => {

    const [search, setSearch] = useState('')
    const [stock, setStock] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value)
        props.onSearch(e.target.value)
    }

    const stockItems = () => {
        setStock(!stock)
        props.onStock(!stock)
    }

    return (
        <>
            <div className="col-12">
                <div className="form-group search-input">
                    <label htmlFor="search">Search product</label>
                    <input type="text" className="form-control" id="search" aria-describedby="search" placeholder="by name" name="search" onChange={handleChange} value={search} />
                </div>
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="stock-items" onChange={stockItems} />
                    <label className="form-check-label" htmlFor="stock-items">Only show products on stock</label>
                </div>
            </div>
        </>
    )
}

export default SearchBar