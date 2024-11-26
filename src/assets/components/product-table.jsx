import ProductRow from "./product-row";
import productList from "../../data.json";

function ProductTable({ search, stock }) {
    return (
        <div className="w-100 border border-primary rounded-2">
            <div className="navbar bg-body-tertiary border-bottom border-primary">
                <div className="d-flex direction-row justify-content-around w-100 p-0 background-secondary">
                    <p className="navbar-brand mb-0 h1 w-100 text-center">Name</p>
                    <p className="navbar-brand mb-0 h1 w-100 text-center">Price</p>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center gap-1 w-100">
                {
                    productList
                        .filter(product => product.name.includes(search))
                        .filter(product => stock ? product.inStock : true)
                        .map(product =>
                            <ProductRow key={product.id} name={product.name} price={product.price} stock={product.inStock} />)

                }
            </div>
        </div>
    )
    
}
export default ProductTable;