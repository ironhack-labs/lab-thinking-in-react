import React from 'react';

export default class SearchBar extends React.Component{
    render() {
        return (
            <div>
                <label for="buscador">Search</label>
                <input id="buscador" type="text"/>
                <br/>
                <input type="checkbox" id="onlyOnStock" />
                <label for="onlyOnStock">Only show products on stock</label>
            </div>
        );
    }
}