

const Search = ({searchValue,onSearch }) => {
  


    return(

    <div className="w-full  flex justify-between items-center px-8 mt-12 max-w-full ">
        <label className="text-slate-500 text-lg max-[640px]:text-sm">Search</label>
        <input className="bg-transparent border text-slate-300 border-slate-500 rounded-lg  py-1 ml-6 max-[640px]:w-4/6" type="text" value={searchValue} onChange={onSearch}></input>
    </div>
   

    );
};
export default Search;
