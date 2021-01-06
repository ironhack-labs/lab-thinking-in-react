import React, { Component } from 'react'

export default class SearchBar extends Component {





    handleSearchBarInput = (event) => {


        this.props.handleChangeFromParent(event.target.value)

    }


    handleCheckBox = (event) => {

        // console.log("searchbar is changing - children comp", event.target.checked)
        this.props.handleCheckBoxFromParent(event.target.checked)

    }



    render() {

        return (
            <div className="SearchBar">

                <div className="form__control">
                    <label className="form__label">Search</label>
                    <input className="form__input SearchBar" onChange={this.handleSearchBarInput} type="text" name="search" placeholder="Searching..." />
                </div>


                <div className="form__control">
                    <input
                        className="form__input"
                        type="checkbox"
                        name="isStock"
                        onChange={this.handleCheckBox}
                    />

                    <label className="form__label">Only show products on stock</label>
                </div>


            </div>
        )
    }
}
