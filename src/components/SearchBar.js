import "./../App.css"

import { useState } from 'react';

function SearchBar ({onSearch}) {
const [searchText,setSearchText] = useState ('');

   function handleSearchTextChange (event) {
        const text = event.target.value;
        setSearchText(text);
        onSearch(text)

   }

return (
 <div className="search-bar">

<label for = "search"> Search </label>

<input type="text" id="search" value = {searchText} onChange = {handleSearchTextChange}/>

<div className="checked">
<label for = "checkbox"> Only show products in stock </label>
<input type="checkbox" id="check-box" value="valor" />
</div>

 
 </div>

)


}

export default SearchBar;