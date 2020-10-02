import React from 'react'

export default function SearchBar({ handleSearch }) {
    const inputStyle = {
        width: '50%',
        height: '30px',
        marginBottom: '30px'
    }
    const divStyle = {
        marginBottom: '30px'
    }
    return (
        <div style={divStyle} >
            Search<br />
            <input type="text" onChange={handleSearch} style={inputStyle} ></input><br />
            <input type="checkbox" /><label> Only show in-stock products</label>
        </div>
    )
}
