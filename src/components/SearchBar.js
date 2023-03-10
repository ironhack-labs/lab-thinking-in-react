function SearchBar(){
    return(
        <div>
            <p>Search:</p>
            <input type='text' name='produto'/>
            <div>
                <input type="checkbox" id="stock" name="stock" />
                <label >Only show products in stock</label>
                
            </div>
        </div>
        
    )
}
export default SearchBar;