import React from 'react';
import data from '../data.json'
import Search from './Search';
import ProductTable from './ProductTable';



export default class App extends React.Component {
    state = {
        data: data.data,
        filtered: data.data
    }

    onSubmits = (e) => {
        const filtered = this.state.data.filter((ele) => {
            return ele.name.includes(e)
        })
        this.setState({
            filtered: filtered
        })
    }

    onChange = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <div>
                    <Search onSubmits={this.onSubmit} />
                </div>
                <div>
                    <ProductTable dataAll={this.state.filtered} />
                </div>
            </div>
        )
    }
}





