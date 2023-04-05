
function SearchBar({ searchProduct, handleSearch }) {

  return (
    <div className='w-1/2 mb-8'>
      <form>
        <div className="">
          <div className="flex space-x-4">
            <div className="flex rounded- overflow-hidden w-full h-14">
              <input
                type="text"
                className="w-full outline-none px-4 font-bold placeholder:font-light placeholder:italic hover:bg-yellow-500 hover:text-black hover:placeholder-slate-900 hover:transition-all hover:ease-in-out hover:duration-500"
                placeholder="Search for a product..."
                value={searchProduct}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar