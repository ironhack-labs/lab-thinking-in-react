import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';

let runningList = [...jsonData];

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState(false);

  const filterList = (incomingList, incomingSearch, incomingStock) => {
    if (incomingStock) {
      incomingList = incomingList.filter(function (str) {
        return str.inStock;
      });
    }
    return incomingList.filter(function (str) {
      return (
        str.name.toLowerCase().includes(incomingSearch.toLowerCase()) ||
        str.price.includes(incomingSearch)
      );
    });
  };

  const filterStock = (e) => {
    runningList = [...filterList(jsonData, search, e.target.checked)];
    setProducts(runningList);
    setStock(e.target.checked);
  };

  const updateSearch = (e) => {
    runningList = [...filterList(jsonData, e.target.value, stock)];
    setProducts(runningList);
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1 className="mt-10 text-4xl mb-1 font-extrabold tracking-tight  text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
        IronStore
      </h1>
      <div className="mt-5 flex flex-col w-1/4" style={{ margin: 'auto' }}>
        <input
          className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={search}
          onChange={(e) => updateSearch(e)}
        ></input>
        <div className="items-center mb-5 text-left">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value="checked"
            id="flexCheckChecked"
            onChange={(e) => filterStock(e)}
          ></input>
          <label
            className=" text-left form-check-label text-gray-800"
            for="flexCheckChecked"
          >
            Hide Out of Stock
          </label>
        </div>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <ProductTable items={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
