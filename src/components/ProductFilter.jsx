function productFilter() {

    return ( 
     <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearch}
      />
    );

}

export default productFilter