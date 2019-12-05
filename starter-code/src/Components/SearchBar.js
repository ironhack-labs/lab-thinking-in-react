import React, { Component } from 'react';
import ProductRow from './ProductRow'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            stock: false
        }
    }

    handleSearch = e => this.setState({ search: e.target.value })
    handleStock = e => this.setState({ stock: e.target.checked })


    render() {

        const filterItems = () => {
            let buscar = this.state.search;

            let filtro = this.props.product.filter(
                el => el.name.toLowerCase().indexOf(buscar.toLowerCase()) > -1
            )
            if (this.state.stock) {
                console.log("entro en el if")
                return filtro.filter(elm => elm.stocked === this.state.stock)
            }
            return filtro
        };
        return (
            <div>
                <h3>Search</h3>
                <form>
                    <input type='text' value={this.state.search} onChange={this.handleSearch} name='search' ></input>
                    <br />

                    <input type='checkbox' id='stock' value={this.state.stock} onChange={this.handleStock} name='stock' ></input>
                    <label htmlFor='stock'>Only show products on stock</label>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(this.props.product)}
                                {filterItems().map((product, idx) => (<ProductRow key={idx} {...product} />))}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        )
    }


}

export default SearchBar