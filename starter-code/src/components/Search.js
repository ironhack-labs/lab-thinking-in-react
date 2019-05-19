import React from 'react';
const Search =(props)=>{

    let {handleChangeSearch}= props
    let {handleCheck}= props

    return (
        <div className='searchBar'> 
        <input name ='word' type='text' onChange ={handleChangeSearch}/>
        <p></p>
        <input type='checkbox' id='stock' onClick={handleCheck}></input> Only Show Products on stock
        </div>
    )

}

export default Search;