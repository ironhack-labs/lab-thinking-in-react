import { useState } from "react"



const SearchBar = (props) => {

    const [search, setSearch] = useState('')

    const [isChecked, setIsChecked] = useState(false)
    
const searchChange = (event) => {
    setSearch(event.target.value)
    props.findProduct(event.target.value)
}








    return(
        <>
            <div>
                <p>Search:</p>
                <input onChange = {searchChange}
                 type="text" value={search}/>
            </div>
            <div>
                 <input type="checkbox" value={isChecked} onChange={(e) => {
                    setIsChecked(!isChecked)
                    props.itemsStock(!isChecked)
                 }}/>
                 <p>In Stock only</p>   
           </div>
        </>
    )
}

export default SearchBar;