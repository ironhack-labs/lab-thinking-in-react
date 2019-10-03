import React, { Component } from 'react'


export default class Productrow extends Component {
    render() {
        return (
            <React.Fragment>
                {!this.props.stocked && (
                    <div className="row noStocked">
                        <div className="column">{this.props.name}</div>
                        <div className="column">{this.props.price}</div>
                    </div>
                )}
                
                {this.props.stocked && (
                    <div className="row">
                        <div className="column">{this.props.name}</div>
                        <div className="column">{this.props.price}</div>
                    </div>
                )}


            </React.Fragment>
        )
    }
}
