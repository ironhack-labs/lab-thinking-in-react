import React from 'react';

function SearchBar(props) {
    const products = props.products
    //console.log("products",products)
    console.log('props de searchbar', props)

    // const [userSearch, setUserSearch] = React.useState(products)

    // const handleChange = (event) => {
    //     const value = event.target.value
    //     console.log("value", value)

    //     setUserSearch(userSearch)

    // }

    const handleChange = (e) => {
        const userSearch = e.target.value
        console.log("value", userSearch)
        props.onChange(userSearch)
    }
    
    const isChecked = (e) => {
        if (e.target.checked) {
            console.log("check true")
            props.filterStockProds()
        } else {
            console.log("check false")
        } 

    }

    return (
        <div>
            <h3>SearchBar</h3>
            <div>
                <label htmlFor="search">Search</label>
                <input type="text" name="search" onChange={handleChange} />
            </div>
            <div>
                <input type="checkbox" name="stock" onChange={isChecked} />
                <label htmlFor="stock">OnlyShow products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar;