import {useState} from 'react'

const SearchBar = (props) => {
    const [filteredArray,setFilteredArray] = useState(props.products)
    const searchProducts = (event) => {
        const searchArray = filteredArray.filter(element => {
            console.log(element.name)
            return element.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        props.setProducts(searchArray)
    }
    return (
        <div>
            <h3>Search</h3>
            <input type='text' onChange={searchProducts}/>
        </div>
    )
}

export default SearchBar