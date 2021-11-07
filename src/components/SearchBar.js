import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    formSubmitHandler(e) {
        e.preventDefault();
    }

    formHandler() {

    }

    render() {
        console.log(`xxxxxxxxxxxxxxxx`)
        console.log(this.props.products[0].name)
    return (
        <>
        <h3>Search</h3>
        <form onSubmit={this.formSubmitHandler}>
                <input
                    onChange={this.formHandler}
                    type="text"
                    placeholder="Search.."
                    name="name"
                    value={this.state.name}/>
        </form>
        <p>have here a search box</p>
        <div>
            <input type="checkbox" id="onStock" name="onStock"/>
            <label for="onStock">Only show products on stock</label>
        </div>
        </>
    )
    }
}