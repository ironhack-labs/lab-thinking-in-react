function Search ({callbackToSearch}){

    return(
        <div>
            <label>Search</label>
            <input type="text" onChange={(e)=>{
                callbackToSearch(e.target.value)
            }}/>
        </div>
    )
}

export default Search;