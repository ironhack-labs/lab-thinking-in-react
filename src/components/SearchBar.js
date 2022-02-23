import { useState } from 'react';
import jsonData from './../data.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function SearchBar(props) {
  const [inputValue, setinputValue] = useState('');
  const [checkboxSearch, setCheckboxSearch] = useState(false);

  function handleSearchInput(e) {
    setinputValue(e.target.value);
    props.searchProp(e.target.value);
  }
  return (
    <Col span={8}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={inputValue} type="text" onChange={handleSearchInput} />
      <Input value={inputValue} type="checkbox" onChange={handleSearchInput} />
    </Col>
  );
}

export default SearchBar;
