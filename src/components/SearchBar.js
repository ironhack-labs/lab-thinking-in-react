import { useState } from 'react';
import jsonData from './../data.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function SearchBar() {
  const [inputValue, setinputValue] = useState('');
  function handleSearchInput() {}
  return (
    <Col span={8}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={inputValue} type="text" onChange={handleSearchInput} />
    </Col>
  );
}

export default SearchBar;
