/* eslint-disable react/prop-types */
function SearchBar(props){
    return(
        <div id="main-search">
            <input id="search" type="text" name="search"  placeholder="Search products" onChange={(e)=>props.filter(e.target.value)}></input>
            <div id="stock">
                <input type="checkbox" name="stock" title="Only show products in stock" onChange={(e)=>props.stock(e.target.checked)} id="check"/>
                <p>Only show products in stock</p>
            </div>
        </div>
    )
}

export default SearchBar