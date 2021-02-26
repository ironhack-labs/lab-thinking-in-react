import React from 'react'

export default function SearchBar(props) {
    return (
        <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
        <h3 className="text-md leading-6 font-medium text-center text-gray-900 dark:text-white">
            Search
        </h3>
        
        <div className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
            <input type="text" id="searchfield"
             name="query"
             value={props.query}
             onChange={(event) => props.inputHandler(event)} 
             className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder=""/>
        </div>
        <div className=" relative ">
        <label className="flex items-center space-x-3 mb-3 mt-2">
            <input type="checkbox"
            checked={props.showCheckBox}
            id="checkbox"
            onChange={(event) => props.inputHandler(event)}
            name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"/>
            <span className="leading-6 text-gray-700 dark:text-white font-normal">
                Only show products on stock
            </span>
        </label>
        </div>
        
    </div>
    )
}
