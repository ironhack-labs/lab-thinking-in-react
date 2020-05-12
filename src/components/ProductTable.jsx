import React from 'react'
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    render() {
        const sgArr = this.props.results.filter(p=>p.category==='Sporting Goods');
        const elcArr = this.props.results.filter(p=>p.category==='Electronics');
        return(
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {sgArr.length!==0 && 
            (<tbody>
                <tr>
                    <td><strong>SportGoods</strong></td>
                </tr>
                {sgArr.map(p=><ProductRow key={p.name} {...p}/>)}
            </tbody>)}
            {elcArr.length!==0 && 
            (<tbody>
                <tr>
                    <td><strong>Electronics</strong></td>
                </tr>
                {elcArr.map(p=><ProductRow key={p.name} {...p}/>)}
            </tbody>)}
            </table>
        )
    }
}

export default ProductTable;