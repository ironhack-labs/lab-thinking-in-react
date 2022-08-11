import { useState } from 'react';

function SearchBar (){
    const [query,setQuery]= useState('')
return (
    <div className='search'>
        Search
    <div className='searchbar'>

    <input placeholder='' className='searchterm' type='text' onChange={(e)=>setQuery(e.target.value) }/>
        </div>
    <br/>
    <input  type='checkbox'  /> Only show products in stock
    </div>    
    );
    
    }
    
    export default SearchBar;