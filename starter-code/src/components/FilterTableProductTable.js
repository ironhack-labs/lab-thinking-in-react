import React, { Component } from 'react'

export default class FilterTableProductTable  extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.props.products.map((item, index)=>{
                        let style = {};

                        item.stocked ? style={background: "green"} : style={background:"red"};

                        return(
                            <tr style={style} key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>                           
                        )
                    })
                }
                </tbody>
                </table>
            </div>
        )
    }
}
