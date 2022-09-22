import ProdutRow from "./ProductRow";

const ProductTable = ({ products }) => {

    return (
        <>

            <div className="table">
                <p>Name</p>
                <p>Price</p>
            </div>
            <ProdutRow products={products} />
        </>
    )
}

export default ProductTable;