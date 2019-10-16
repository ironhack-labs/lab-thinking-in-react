import React from 'react';

const SearchBar = (props) => {
    return (
        <tr>
            <td>{ props.name }</td>
            <td>{ props.price }</td>
        </tr>
    )
}

export default SearchBar;