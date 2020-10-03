import React from 'react';

class ProductRow extends React.Component {
    
    render() {
        return (
            <div className='d-flex justify-content-around' key={this.props.key}>
                <p style={this.props.Stocked ? {color: 'inherit'} : {color: 'red'}}>{this.props.Name}</p>
                <p>{this.props.Price}</p>
            </div>
        );
    }

};

export default ProductRow;