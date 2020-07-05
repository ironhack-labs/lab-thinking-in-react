import React from 'react';

export default class Search extends React.Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmits(this.state.text)
    }

    onInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} />
                    <input type='text' placeholder='reach for products' value={this.state.text} onChange={this.onInputChange} />
            </div>
        )
    }
}