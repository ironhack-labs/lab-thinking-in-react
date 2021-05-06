import { Component } from "react";
import React from 'react'
import SearchBar from "../SearchBarComponent/searchBar";
import IronItems from "../ironItemComponents/ironItems";

class Ironstore extends Component {
    constructor(props) {
        super()
        this.state = {
            fullData: props.products.data,
            products: props.products.data,

        }
    }

    filteredTable(data, bool) {

        const filterFinal = this.state.fullData.filter(elm => {

            if (elm.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()) && bool == true) {
                return elm.stocked == true
            } else if (elm.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()) && bool == false) {
                return elm
            }
        })
        this.setState({
            products: filterFinal
        })
    }

    render() {
        console.log(this.state.products);

        return (
            <section>
                <SearchBar filterItem={(data, bool) => this.filteredTable(data, bool)} />
                <IronItems data={this.state.products} />
            </section>

        )
    }
}

export default Ironstore