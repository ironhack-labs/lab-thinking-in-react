import ProductRow from "../product-row/product-row";

function ProductTable({ products, search, isChecked }) {
    return (

        <table className="table table-hover table-primary table-striped-columns">
            <thead className="table-dark ">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody id="tableBody">
                <ProductRow
                    products={products}
                    search={search}
                    isChecked={isChecked}
                />
            </tbody>
        </table>
    );
}

export default ProductTable;
