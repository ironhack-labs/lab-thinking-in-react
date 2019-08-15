import React from 'react'

const SearchBar = ({ search }) => {



    return (<div className="container">
        <div className="row">
            <input type="text" className="form-control col-lg-8" placeholder="Search" onChange={(e)=>search(e)}/>
        </div>
    </div>)
}




export default SearchBar