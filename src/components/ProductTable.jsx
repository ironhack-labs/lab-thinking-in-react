import ProductRow from "./ProductRow";

export default function ProductTable (props){
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product)=> <ProductRow key={product.id} product={product} />)}
            </tbody>
        </table>
    )
}