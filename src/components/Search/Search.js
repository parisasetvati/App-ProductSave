import { useState } from "react";

const Search = ({searchValue,onSearch }) => {
  


    return(

    <div className="w-full flex justify-between items-center px-8 mt-12 ">
        <label className="text-slate-500 text-lg max-[640px]:text-sm">Search</label>
        <input className="bg-transparent border border-slate-500 rounded-lg p-2" type="text" value={searchValue} onChange={onSearch}></input>
    </div>
   

    );
};
export default Search;
