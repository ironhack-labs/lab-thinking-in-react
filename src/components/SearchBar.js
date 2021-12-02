import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Search = styled.input`
    width: 300px;
    margin-bottom: 12px;
    padding: 4px 8px;
    border: 1px solid lightgray;

    &:focus {
        border-color: lightblue;
    }
`

const Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        margin-right: 4px;
        cursor: pointer;
    }

    label {
        user-select: none;
        cursor: pointer;
    }
`

export default function SearchBar(props) {
    return (
        <Container {...props}>
            <Search type="search" value={props.searchValue} onChange={props.changeSearch} />

            <Checkbox>
                <input type="checkbox" name="inStock" id="inStock" onChange={props.changeCheckbox} />
                <label htmlFor="inStock">Only show products in stock</label>
            </Checkbox>
        </Container>
    )
}