import React, { Component } from 'react'

export default class SearchBar extends Component {





    handleSearchBarInput = (event) => {

        // event.target.type === "checkbox" ?
        // console.log("searchbar is changing - children comp", event.target.checked) :
        // console.log("searchbar is changing - children comp", event.target.value)

        this.props.handleChangeFromParent(event.target.value)

    }


    handleCheckBox = (event) => {

        // console.log("searchbar is changing - children comp", event.target.checked)
        this.props.handleCheckBoxFromParent(event.target.checked)

    }



    render() {

        // console.log("search bar is called")

        return (
            <div>

                <div className="form__control"> <label className="form__label">Search</label>

                    <input className="form__input" onChange={this.handleSearchBarInput} type="text" name="search" placeholder="Searching..." />
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
