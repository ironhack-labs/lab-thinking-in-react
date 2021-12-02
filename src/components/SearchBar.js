
import React, { Component } from "react";
import jsondata from '../data.json'
import ProductRow from "./ProductRow";

class SearchBar extends Component {

    state = {
        searchbar: "",
        checkbox: false
    }


    componentDidUpdate = () => {
        this.props.sendInfo(this.state)

    }


    handleChange = (e) => {
        let { checked } = e.currentTarget
        
            this.setState({
            checkbox: checked
        })
    } 
    



    getSearch = (e) => {
        let searchValue = e.currentTarget.value.toLowerCase();
       
        this.setState({
            searchbar: searchValue

        })

    }

    render() {
        return (
            <div>
                <form>
                <div>
                    <input type="search" name="searchbar" placeholder="search" onChange={this.getSearch}></input>
                </div>
                <label>
                    Busca productos<input value="" type="checkbox" name="checkbox" onChange={this.handleChange} />
                </label>
                </form>
                


            </div>
        );
    }

}

export default SearchBar;