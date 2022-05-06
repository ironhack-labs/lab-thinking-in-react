import ProductRow from './ProductRow'

export default function ProductTable (props) {
    return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <ProductRow products={props.products} query={props.query} checked={props.checked}/>
    </table>
    )
}
