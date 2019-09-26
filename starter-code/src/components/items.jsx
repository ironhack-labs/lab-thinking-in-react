import React, { Component } from 'react';

export default class Items extends Component {
    render() {

        let color = this.props.stocked ? "black" : "red"

        return (
            <div>

                <table className="table table-dark" style={{
                    margin: "10px"

                }} >

                    <thead>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <h6>{this.props.category}</h6> */}
                            <td style={{ color: color }} >{this.props.name}</td>
                            <td>{this.props.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

