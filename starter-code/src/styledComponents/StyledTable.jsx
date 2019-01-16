import styled from '@emotion/styled';
import {colors} from '../lib/colors';

export const StyledTable = styled.div`
  width: 100%;
  margin: 2em 0;
  .header {
    font-size: 1.5em;
    font-weight: bold;
    span {
      padding: .5em 1em;
      display: inline-block;
      width: 50%;
      opacity: .4;
      color: ${colors.white};
      background-color: ${colors.darkGrey};
      &:first-of-type {
        border-right: 3px solid ${colors.white};
      }
    }
  }
  .productCategoryRow {
    color: ${colors.darkGrey};
    background-color: ${colors.grey};
    padding: .5em 1em;
    margin: 0;
  }
  ul {
    &.productList {
      margin: 0;
      padding: 0;
      li {
        &.productRow {
          list-style-type: none;
          font-size: 1.3em;
          span {
            padding: .5em 1.1em;
            display: inline-block;
            width: 50%;
            border: 1px solid #eee;
          }
          &.noProducts {
            padding: 1em 1.5em;
            background-color: ${colors.lightRed};
            color: ${colors.darkRed};
            font-size: 1em;
            //opacity: .7;
          }
        }
        &.outStock {
          color: ${colors.red};
        }
      }
    }
  }
`;
