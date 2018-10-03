import React, { Component } from 'react';

class ProcductCategoryRow extends Component {
    render() {
        const { category } = this.props;
        return(
            <tr>
                <td>{category}</td>
            </tr>
        )
    }
}

export default ProcductCategoryRow;