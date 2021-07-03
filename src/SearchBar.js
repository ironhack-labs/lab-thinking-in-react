import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledSearchBar = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
    padding-bottom: .75rem;
    border-bottom: solid lightgray 1px;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;
const StyledCheckboxWrapper = styled.div`
    align-items: center;
    display: inline-flex;
    margin: .75rem 0;
`;

const StyledCheckboxLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
`;

const StyledCheckboxSquare = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  /* Spacing */
  margin-right: .5rem;
  padding: .25rem;
`;
const StyledLabelCheckbox = styled.div`
    background-color: transparent;
    border-radius: 4px;
    height: 12px;
    width: 12px;
`;

// const selectedStyle = {
//     backgroundColor: 'slateblue'
// };

const StyledSearchWrapper = styled.div`
    width: 50%;
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    /* If you want to place the icon before the text input */
    flex-direction: row-reverse;
`;
const StyledSearchInput = styled.input`
    border-color: transparent;
    /* Take available width */
    flex: 1;
    font-size: 1rem; 
`;
const styleHidden = {display: 'none'};

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
          <StyledSearchWrapper className="SearchBar_search__wrapper">
            <label style={styleHidden} htmlFor="search"></label>
            <StyledSearchInput
              onChange={handleOnChange}
              name="search"
              id="search"
              type="text"
              placeholder="Search"
            />
            <span className="material-icons-outlined">search</span>
          </StyledSearchWrapper>
          <StyledCheckboxWrapper className="SearchBar_in_stock__wrapper">
            <StyledCheckboxLabel htmlFor="in_stock">
              <input
                style={styleHidden}
                onChange={handleOnChange}
                name="inStock"
                id="in_stock"
                type="checkbox"
                checked={isChecked}
              />
              <StyledCheckboxSquare>
                <StyledLabelCheckbox style={{backgroundColor: isChecked ? 'slateblue' : null}}></StyledLabelCheckbox>
              </StyledCheckboxSquare>
              Only show products in stock
            </StyledCheckboxLabel>
          </StyledCheckboxWrapper>
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

