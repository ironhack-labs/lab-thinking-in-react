import ProductRow from "./ProductRow";

const ProductTable = ({products}) => {
    
const productos = products
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td >name</td>
                        <td>price</td>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((product) => (
                        <tr key={product.id}>
                            <ProductRow {...product} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
