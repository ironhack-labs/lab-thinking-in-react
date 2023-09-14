import { useState } from "react"

function SearchBar(props) {
    const [searchWord, setSearchWord] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    const handleInStockChange = (e) => {
        setInStockOnly(e.target.checked)
    }
    const workSearch = () => {
        const filteredProducts = props.products.filter((product) => {
          const nameMatch = product.name.toLowerCase().includes(searchWord.toLowerCase());
          const inStockMatch = !inStockOnly || product.inStock;
          return nameMatch && inStockMatch;
        });
        props.onSearch(filteredProducts);
      };
    
    return(
        <div className="search">
        <h3>Search</h3>
        <input onChange={(e) => setSearchWord(e.target.value)} type="text" value={searchWord} id="qery" placeholder="Search here."/>
        <span>
        <input id="check" type="checkbox" onChange={handleInStockChange} checked={inStockOnly} />
        <label htmlFor="inStockOnly"> In Stock Only</label>
        </span>
        
        <button onClick={workSearch}>Search</button>
        </div>
    )
}

export default SearchBar