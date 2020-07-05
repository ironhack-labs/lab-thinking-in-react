import React from 'react';
import Row from './Row'

class ProductTable extends React.Component {



    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    {this.props.dataAll.map((v, i) => {
                        return (<tbody>
                            <Row key={i} rowP={v} />
                        </tbody>
                        )
                    })}
                </table>
            </div>
        )
    }
}

    export default ProductTable 