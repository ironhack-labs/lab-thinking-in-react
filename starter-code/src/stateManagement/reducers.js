import {initialState} from "./initialState";
import {FILTER_SEARCH, TOGGLE_ONSTOCK} from "./actions";


export default function reducer(state=initialState, action){

  switch (action.type){
    case (FILTER_SEARCH):
      return {
        ...state,
        searchInput: action.payload,
      };
    case (TOGGLE_ONSTOCK):
      return {
        ...state,
        showOnlyOnStock: action.payload,
    };
    default:
      return state
  }
}