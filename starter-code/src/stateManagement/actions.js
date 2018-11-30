export const FILTER_SEARCH = "FILTER_SEARCH";
export const TOGGLE_ONSTOCK = "TOGGLE_ONSTOCK";



export function action__filterOnSearchInput(searchInput){
  return {
    type: FILTER_SEARCH,
    payload: searchInput,
  }
}

export function action__toggleOnlyOnStock(onlyOnStock){
  return {
    type: TOGGLE_ONSTOCK,
    payload: onlyOnStock
  }
}