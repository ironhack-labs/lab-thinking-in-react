import React, { Component } from 'react';
import SecondBox from  './SecondBox';

class FirstBox extends Component{
    render() {
        return (
            <div>
                <p>Search</p>
                <input type="text" name="keyword"></input>
                <br></br>
                <input type="checkbox" name="stock"></input>
                <label>Only show products on stock</label>
                <SecondBox products={this.props.products} />
            </div>
        )
    }
}
export default FirstBox;