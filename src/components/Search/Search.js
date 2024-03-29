const Search = ({ searchValue, onSearch }) => {
  return (
    <div className="w-full  flex justify-between items-center px-8 mt-12 max-w-full max-[600px]:flex-col max-[600px]:items-start ">
      <label className="text-slate-300 text-lg max-[640px]:text-sm">
        Search
      </label>
      <input
        className="bg-transparent border text-slate-300 border-slate-500 rounded-lg  py-1 ml-6  max-[600px]:mt-4 max-[600px]:ml-0 "
        type="text"
        value={searchValue}
        onChange={onSearch}
      ></input>
    </div>
  );
};
export default Search;
