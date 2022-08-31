import "./SearchBar.styles.css"

export const SearchBar = (props) => {
  const {title, placeholder, checkboxtext, onChange, defaultChecked = false, value, onChangeCheckbox} = props
  return(
    <div className="search-bar">
      <p>{title}</p>
      <input onChange={onChange} className="input-search" type="text" placeholder={placeholder} />
      <div className="checkbox-div">
        <input type="checkbox"           
          defaultChecked={defaultChecked}
          value={value}
          onChange={onChangeCheckbox}/>
        <p>&nbsp;{checkboxtext}</p>
      </div>
      
    </div>
  )
}