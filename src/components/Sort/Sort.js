const Sort = ({sort,onSort}) => {
    return ( 
        <section lassName="mx-8 my-10 ">

        
        <div className="w-full flex justify-between items-center px-6 my-8 max-w-full ">
            <label className="text-slate-500 text-lg  ml-2 max-[640px]:text-sm">Sort</label>
            <select  className="bg-transparent border border-slate-500 rounded-lg px-3 py-1 w-3/6 text-slate-300" onChange={onSort}  value={sort} >
<option className="text-slate-800 " >latest</option>
<option className="text-slate-800 ">earlist</option>
  
   
    </select>
        </div>
        </section>

     );
}
 
export default Sort;