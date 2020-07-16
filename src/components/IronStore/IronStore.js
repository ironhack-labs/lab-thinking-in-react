import React, { Component } from 'react'

import './IronStore.css'

import { data } from './../../data.json'
import SearchForm from '../SearchBar/SearchBar'

class IronStore extends Component {

    constructor() {
        super()
        this.state = {
            data
        }
    }

    searchItem = props => {
        const dataCopy = [...this.state.data]
        dataCopy.filter(elm => elm.includes(props))
        this.setState({ data: dataCopy })
    }


    render() {

        return (
            <main>
                <h1>IronStore</h1>
                <div>
                    <SearchForm searchItem={() => this.searchItem()} />
                </div>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {this.state.data.map((elm, idx) =>
                        <tr key={idx}>
                            <td>{elm.name}</td>
                            <td>{elm.price}</td>
                        </tr>
                    )}
                </table>
            </main>

        )
    }


}


export default IronStore