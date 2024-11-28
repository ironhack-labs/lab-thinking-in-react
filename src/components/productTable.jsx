import ProductRow from "./productRow";

function ProductTable({ products }) {
    return (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px"  }} >
            <thead style={{ backgroundColor: "#f9f9f9" }} >
                <tr style={{ padding: "12px", textAlign: "center", borderBottom: "1px solid #ddd" }} >
                    <th
                        style={{
                            padding: "10px", // Padding más grande
                            fontWeight: "bold",
                            color: "#a6a6a6"
                        }}
                    >
                        Name
                    </th>
                    <th
                        style={{
                            padding: "10px", // Padding más grande
                            fontWeight: "bold",
                            color: "#a6a6a6"
                        }}
                    >
                        Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow key={product.id} product={product} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;