import React from "react";


export default class SearchBar extends React.Component {

    state = {
        category: "",
        price: "",
        stocked: "",
        name: ""
    };

    updateForm(e) {
        const { name, value } = e.target
        console.log(value)
        this.props.searchBar(value)
        this.setState({
            [name]: value
        });  
    }

    render() {
        return (
            <form>
                <input
                    type="search"
                    placeholder="Type Search"
                    value={this.state.name}
                    name="name"
                    onChange={e => this.updateForm(e)}
                />
            </form>
        )
    }
}