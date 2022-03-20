import ProductRow from './ProductRow';

function ProductTable(props) {

    // const {jsonDataTable} = props

    return (
        <table className='table m-5'>
            <thead>
                <tr className="table-primary">
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {props.batata.map((currentElement) => (
                <ProductRow 
                    name={currentElement.name}
                    price={currentElement.price}
                    inStock={currentElement.inStock}
                />
                ))}
            </tbody>
        </table>
    );

};

export default ProductTable;