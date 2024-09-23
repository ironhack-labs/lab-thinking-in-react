import ProductRow from "./ProductRow";

function ProductTable({products, searchWord, filterStock}){
    return(
        <div id="product-table" className="width-total">
            <div className="flex-row bg-lightgray space-evenly pd-10">
                <p>Name</p>
                <p>Price</p>
            </div>
            {
                products.filter((product)=>filterStock ? product.inStock : true)
                .map((product)=>{
                    if(product.name.toLowerCase().includes(searchWord.toLowerCase())){
                        return(
                            <ProductRow key={product.id} product={product}/>
                        );
                    }
                })
            }
        </div>
    );

}

export default ProductTable;