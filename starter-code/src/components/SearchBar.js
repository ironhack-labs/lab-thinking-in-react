import React from "react";

export default class SearchBar extends React.Component{

    search(e){
        this.props.searchProducts(e)
    }

    render(){
        return(

          <div className="search-bar">

              <input type="text" onChange={(e) => this.search(e)} className="input" placeholder="Search..." />
          </div>
        )
    }
}