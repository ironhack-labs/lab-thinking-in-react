import React from 'react'
import styled from 'styled-components';


const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  margin: 0.5rem 0;
  cursor: pointer;
  width: 150px;
`;
const Button = ({ buttonText, buttonColor, buttonType }) => {
  return (<StyledButton backgroundColor={buttonColor} type={buttonType}>{buttonText}</StyledButton>);
};
 
export default Button;