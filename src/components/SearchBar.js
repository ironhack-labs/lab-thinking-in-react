import { useState } from 'react';

function SearchBar (props) {
//   const [products, setProducts] = useState(); //jsonData
  const [ query, setQuery ] = useState("");
  const [ checkbox, setCheckbox ] = useState(false);
  

  const handleQuery = e => {
    e.preventDefault();
    setQuery(e.target.value);
    props.search(e.target.value);
  }

  const handleCheckbox = e => {
    setCheckbox(!checkbox);
    props.sort(!checkbox);
  }
  
    return (
    <div className="search-items">
        <div className="search-box">
            <input type="text" className="search" placeholder="Search" value={query} onChange={handleQuery}/>
        </div>
        <div className="sort-box">
            <label> Only show products in stock
            <input type="checkbox" className="stock" onChange={handleCheckbox} checked={checkbox}/></label>
        </div>    
    </div>
    );    
}

export default SearchBar;

