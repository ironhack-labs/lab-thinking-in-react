import React from "react";
import "./../styles/Search.css";

export default function Search(props) {
    return(
        <div className="search-box">
            <input className="searchbar" type="text" onChange={props.callbackFilter}/>
            <div>
            <input className="check" type="checkbox" onChange={props.callbackStock}/>Only in stock
            </div>
        </div>
    )
}