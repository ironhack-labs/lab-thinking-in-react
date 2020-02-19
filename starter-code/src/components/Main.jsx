import React, {Component} from "react";
import Search from "./Search";
import Table from "./Table";
import "./../styles/Main.css"

export default class Main extends Component {
    state = {
        products: this.props.products.data
    }

    updateTable = input => {
        input ?
        this.setState({products: this.state.products.filter(p => p.name.toLowerCase().startsWith(input.toLowerCase()))})
        : this.setState({products: this.props.products.data})
    }

    toggleDisplay = () => {
        this.state.products === this.props.products.data ?
        this.setState({products: this.state.products.filter(p => p.stocked)})
        : this.setState({products: this.props.products.data})
    }

    render() {
        return (
            <section className="main-section">
                <Search callbackStock={(e) => this.toggleDisplay()} callbackFilter={(e) => this.updateTable(e.target.value)}/>
                <Table data={this.state.products}/>
            </section>
        )
    }
}