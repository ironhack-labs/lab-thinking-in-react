import React, {Component} from 'react';

export default class SearchBar extends Component {
    render({handleChange}=this.props) {
        return(
            <div className="searchCont">
                <span>Search: </span>
                <input placeholder="Escribe aqui" name="search" onChange={(e)=>handleChange(e)} />
                {/* <div className="onlyStock">
                    <input type="checkbox" name="onlyStock" />
                    <span> Only show products on stock</span>
                </div> */}
            </div>
        )
    }
}