import React from 'react';

import ProductRow from "./ProductRow";

const SearchBar = (props) => {
    console.log(props)
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((elem, idx) => <ProductRow key={idx} name={elem.name} price={elem.price} />)}
            </tbody>
        </table>
    )
}

export default SearchBar;