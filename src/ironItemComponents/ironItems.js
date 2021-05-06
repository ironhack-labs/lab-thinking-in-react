import { Component } from "react";
import React from 'react'

class IronItems extends Component {
    constructor(props) {
        super()
        this.state = {
            data: props.data,
        }
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(elm => {
                            return (
                                <tr key={elm.id}>
                                    <td>{elm.name}</td>
                                    <td>{elm.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }

}

export default IronItems