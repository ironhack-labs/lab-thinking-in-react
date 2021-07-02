import React, { useState } from 'react'
import ItemTable from './ItemTable';
import SearchBar from './SearchBar';
import data from './data.json';

const FilterableItemTable = () => {
    const [items, setItems] = useState(data.data);
    const [isChecked, setIsChecked] = useState(false);
    const [searchItems, setSearchItems] = useState(data.data);

    const myIsChecked = (checkEvent) => {
        checkEvent && setIsChecked(p => !p)
        console.log(isChecked);
    };

    const myShowSearch = (search) => {
        const searchedItem = search;
        const newItems = items.filter(item => item.name.toLowerCase().includes(searchedItem.toLowerCase()));
        setSearchItems(p => p = newItems);
    };

    return (
      <article className="FilterableItemTable">
        <SearchBar
          showSearch={myShowSearch}
          setIsChecked={myIsChecked}
          isChecked={isChecked}
        ></SearchBar>
        <ItemTable
          inStock={isChecked}
          key={items.id}
          searchedItemsList={searchItems}
          itemsList={items}
        ></ItemTable>
      </article>
    );
}
 
export default FilterableItemTable;