import ProductRow from '../ProductRow/ProductRow.jsx'
// import Table from 'react-bootstrap/Table';


function ProductTable({ items }) {
    return (<>
        <h1>Tabla</h1>

        <table >
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Price</th>

                </tr>
            </thead>
            <tbody>
                <ProductRow items={items} />

            </tbody>
        </table>


    </>)
}
export default ProductTable;