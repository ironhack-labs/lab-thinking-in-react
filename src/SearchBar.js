import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledSearchBar = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;
const StyledWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 0.75rem;
`;
const StyledSearchInput = styled.input`
    width: 70%;
    border-radius: 5px;
    padding: 0.5rem;
    margin-left: 0.5rem;

`

const SearchBar = ({ showSearch, isChecked, setIsChecked }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        if (name === 'search') {
        name = value;
        showSearch(name);
        } else if (name === 'inStock') {
        name = value;
        setIsChecked(name);
        }
    };

    return (
      <StyledSearchBar className="SearchBar">
        <StyledForm onSubmit={handleSubmit}>
          <StyledWrapper className="SearchBar_search__wrapper">
            <label htmlFor="search">Search </label>
            <StyledSearchInput
              onChange={handleOnChange}
              name="search"
              id="search"
              type="text"
              placeholder="What r u loooookin' 4?"
            />
          </StyledWrapper>
          <StyledWrapper className="SearchBar_in_stock__wrapper">
            <label htmlFor="in_stock">
              <input
                onChange={handleOnChange}
                name="inStock"
                id="in_stock"
                type="checkbox"
                checked={isChecked}
              />
              Only show products in stock
            </label>
          </StyledWrapper>
          <Button
            buttonText="Submit"
            buttonType="submit"
            buttonColor="slateblue"
          ></Button>
        </StyledForm>
      </StyledSearchBar>
    );
};
 
export default SearchBar;

