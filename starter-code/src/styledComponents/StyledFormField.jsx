import styled from '@emotion/styled';
import {colors} from '../lib/colors';

export const StyledFormField = styled.div`
  width: 100%;
  label {
    width: 100%;
    margin: ${({label}) => (label === undefined) ? '0' : '1em 0'};
    font-weight: bold;
  }
  .control {
    margin-top: 1em;
    display: flex;
    flex-flow: row nowrap;
    justify: flex-start;
    align-items: center;
    span {
      &.tagName {
        margin-left: .5em;
      }
    }
    input, button, textarea, select {
      width: 100%;
      padding: .8em 1em;
      margin-bottom: 1em;
      box-shadow: none;
      background: transparent;
      outline: 0;
      color: ${colors.black};
      font-size: .9em;
      border: 2px solid #eee;
      &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${colors.grey};
        -webkit-box-shadow: 0 0 0px 1000px ${colors.white} inset;
      }
      &::-webkit-input-placeholder, &::-moz-placeholder, &:-ms-input-placeholder, &:-moz-placeholder {
        color: ${colors.black};
        opacity: .5;
      }
    }
    input {
      border-radius: .3em;
      padding: .5em 1em;
      margin: ${({label}) => (label === undefined) ? '0' : '1em 0'};
      &[type='checkbox'] {
        width: auto;
      }
    }
  }
`;
