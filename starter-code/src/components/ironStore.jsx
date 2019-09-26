import React, { Component } from 'react';
import Searchbar from './searchBar';
import Items from './items';
// import "../index.css"


export default class IronStore extends Component {

    // showSportingGoods = () => {
    //     let list = [...this.props.goods].sort()
    //     return list.map((item, index) => {
    //         return <Items {...item} key={index} />
    //     })
    // }
    showSportingGoods = () => {
        let list = [...this.props.goods].sort()
        return list.map((item, index) => {
            return (
                <div>
                    <h5 id={`head${index}`} >{item.category}</h5>
                    <Items {...item} key={index} />
                </div>
            );
        })
    }

    render() {
        return (
            <div className="container">
                <h2> IronStore </h2>
                <Searchbar
                    query={this.props.query}
                    handleQuery={this.props.handleQuery}
                    checked={this.props.checked}
                />

                {this.showSportingGoods()}
            </div>
        );
    }
}

