
function SearchBar(props){
    function sortByName(){
        const productsCopy = [...props.products]
        const sortedProducts = productsCopy.sort((a,b)=>{
            return a.name.localeCompare(b.name)
        })
        return props.setProducts(sortedProducts)
    }
    function sortByPrice(){
        const productsCopy = [...props.products]
        const sortedProducts = productsCopy.sort((a,b)=>
        {
            let priceA = parseInt(a.price.substring(1))
            let priceB = parseInt(b.price.substring(1))
            console.log("prices: ", priceA, priceB)
            return priceA - priceB
        })
        props.setProducts(sortedProducts)
    }
    return(
        <div id="search-bar-container">
            <button onClick={sortByName}>Sort by Name</button>
            <button onClick={sortByPrice}>Sort by Price</button>
        </div>
    )
}

export default SearchBar