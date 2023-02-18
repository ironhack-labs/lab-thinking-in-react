import React from "react";
import ProductRow from '../ProductRow';


function ProductTable(props) {
const { products, filterText, inStockOnly } = props;

const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(filterText.toLowerCase());
    const stockMatch = inStockOnly ? product.inStock : true;
    return nameMatch && stockMatch;
});

const categories = Array.from(new Set(filteredProducts.map((product) => product.category)));

const rows = categories.map((category, index) => (
    <React.Fragment key={category}>
    <tr className="category-row">
        <th colSpan="2">{category}</th>
    </tr>
    {filteredProducts.map((product, index) => {
        if (product.category === category) {
        return (
            <tr key={index} className={product.inStock ? "instock-row" : "outofstock-row"}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            </tr>
        );
        }
        return null;
    })}
    </React.Fragment>
));

return (
    <table className="product-table">
    <thead>
        <tr>
        <th>Name</th>
        <th>Price</th>
        </tr>
    </thead>
    <tbody>{rows}</tbody>
    </table>
);
}

export default ProductTable;
//    <table className="product-table">
