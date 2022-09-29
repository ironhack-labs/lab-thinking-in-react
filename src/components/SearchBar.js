import {useState} from 'react'

function SearchBar(props){

    const[search,setSearch] = useState('');


    const handleSearch = (event) => {
        event.preventDefault();

        console.log("searching")
        props.handleSearch(event);

        setSearch('');
    }

    return(
        <div>
            <h3>Search</h3>
            <form>
                <input type="text" onChange={handleSearch}/>
            </form>
        </div>
    )
}

export default SearchBar;