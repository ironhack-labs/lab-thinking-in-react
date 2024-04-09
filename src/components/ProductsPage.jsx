import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import jsonData from "../data.json";
import { useState } from 'react';

function ProductsPage() {

	const [products, setProducts] = useState(jsonData);
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [showStockOnly, setShowStockOnly] = useState(false);


	const toSearch = (searchTerm, showInStock) => {
		const filtered = products.filter((product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(showInStock ? product.inStock : true)
		);
		setFilteredProducts(filtered);
	};

	const toggleInStock = (showInStock) => {
		setShowStockOnly(showInStock);
		toSearch('', showInStock); 
	};

	return (
		<div>
			<SearchBar
				toSearch={toSearch}
				showInStockOnly={setShowStockOnly}
				toggleInStock={toggleInStock}
			/>
			<ProductTable filteredProducts={filteredProducts} />
		</div>
	);
}

export default ProductsPage;
