import "./SearchBar.styles.css"

export const SearchBar = (props) => {
  const {title, placeholder, checkboxtext} = props
  return(
    <div className="search-bar">
      <p>{title}</p>
      <input className="input-search" type="text" placeholder={placeholder} />
      <div className="checkbox-div">
        <input type="checkbox" />
        <p>&nbsp;{checkboxtext}</p>
      </div>
      
    </div>
  )
}