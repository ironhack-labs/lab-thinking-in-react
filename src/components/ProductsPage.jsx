import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

import JsonData from '../data.json';
import ProductTable from './ProductTable';
import Searchbar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(JsonData);

  const [renderList, setRenderList] = useState(products);
  const [searchName, setSearchName] = useState('');
  const [avaliable, setAvaliable] = useState(false);

  useEffect(handleNameSearch, [searchName]);
  useEffect((_) => handleAvaliables(), [avaliable]);

  function handleNameSearch() {
    const aux = [...products].filter((value) => {
      if (value.name.toLowerCase().includes(searchName.toLowerCase())) {
        return value;
      }
    });

    setRenderList(aux);
  }

  function handleAvaliables() {
    const aux = [...products].filter((value) => {
      if (value.inStock === avaliable) {
        return value;
      }
    });

    avaliable ? setRenderList(aux) : setRenderList(products);
  }

  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Searchbar searchName={setSearchName} avaliableItens={setAvaliable} />
        <ProductTable list={renderList} />
      </Container>
    </div>
  );
}

export default ProductsPage;
