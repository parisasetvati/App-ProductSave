const Filtercategory = ({addcategory, filtercategory,onfilter}) => {
    return (
        <div className="w-full flex justify-between items-center px-8 my-10  max-w-full">
            <label className="text-slate-500 text-lg max-[640px]:text-sm">Filter</label>
            <select  className="bg-transparent border border-slate-500 rounded-lg px-3 py-1 w-2/6 text-slate-300 max-[640px]:w-4/6" onChange={onfilter}  value={filtercategory} >
<option className="text-slate-800" value="">All</option>
  
    {addcategory.map((p)=>{
return <option key={p.id} value={p.id}  className="text-slate-800 ">{p.category}</option>
    })}
    </select>
        </div>
      );
}
 
export default Filtercategory;