import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const Search = () => {
    const input = document.querySelector('#Search');
    const filter = input.value.toUpperCase();
    const table = document.querySelector('table');
    const tr = table.getElementsByTagName('tr');
    let found = null;
    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName('td');

      for (let j = 0; j < td.length; j++) {
        if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
          found = true;
        }
      }
      if (found) {
        tr[i].style.display = '';
        found = false;
      } else {
        tr[i].style.display = 'none';
      }
    }
  };

  const filterProductsByName = (arrayProducts) => {
    const newArray = arrayProducts.filter((product) => {
      return product.inStock === true;
    });
    setProducts(newArray);
  };
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        filter={filterProductsByName}
        search={Search}
        products={products}
      />
      <ProductTable products={products} search={Search} />
    </div>
  );
};
export default ProductsPage;
