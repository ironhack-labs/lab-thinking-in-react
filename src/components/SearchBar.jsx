
  
import {useState} from "react"

function SearchBar(props){
    const [searchString, setSearchString] = useState("")
    const [checkBox, setCheckBox] = useState(false)

    const handleSearch = event => {
        setSearchString(event.target.value)
        props.searchBar(event.target.value)
    }

    const handleCheckbox = event =>{
        setCheckBox(event.target.checked)
        props.checkbox(event.target.checked)
    }

    return (
        <div>
            <h2>Search</h2>
            <input type="text" value={searchString} onChange={handleSearch} />
            <input type="checkbox" name="" id="" onChange={handleCheckbox}/>
            <label htmlFor="">Only show products in stock</label>
        </div>
    )
}

export default SearchBar