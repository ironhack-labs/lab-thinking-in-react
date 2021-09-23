import React from "react"
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";

class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products,
        }
    }

    displayTable = () => {

        // const filteredProducts = this.state.products.filter(product => product.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return (
            this.state.products.map((p, idx) => {
                return <ProductTable name={p.name} price={p.price} key={`${p.name}- ${idx}`} />
            })
        )
    }

    render() {
        return (
            <div>
                <SearchBar />
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {
                        this.displayTable()
                    }
                </table>
            </div >
        )
    }
}

export default FilterableProductTable