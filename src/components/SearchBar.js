import React, { Component } from 'react'

export class SearchBar extends Component {

    constructor(props) {
        super(props)
        //bind
        this.search = this.search.bind(this)
        this.check=this.check.bind(this)

    }

    search(e) {
        console.log(e.target.value)
        //this.props.callbackFuntion
        this.props.callbackFuntion(e.target.value)
    }

    check(e){
        console.log("holaaaaaa:", e.target.checked)
        this.props.functionStock(e.target.checked)
    }


    render() {
        return (
            <div>
                <label>Search</label>
                <input type="text" name="search" onChange={this.search} />
                <input type="checkbox" name="stock" onChange={this.check} />
            </div>
        )
    }
}

export default SearchBar
