import React, {Component} from 'react';


export default class Searchinput extends Component {
    render ({handleChange}=this.props){
        return (
            <div className="search-container">
            <span>Search</span>
            <input placeholder="Escribeleeee" onChange={(e)=>handleChange(e)}/>
            <div className="isStockStyle">
            <checkbox />
            <span>Si hay productos disponibles en el stock</span>
            </div>
            </div>
        )
    }
}