const Sort = ({sort,onSort}) => {
    return ( 
        <section lassName="mx-8 my-8 ">

        
        <div className="w-full flex justify-between items-center px-8 my-2 max-w-full ">
            <label className="text-slate-500 text-lg max-[640px]:text-sm">Sort</label>
            <select  className="bg-transparent border border-slate-500 rounded-lg p-2  w-2/6 text-slate-300" onChange={onSort}  value={sort} >
<option className="text-slate-800 " >latest</option>
<option className="text-slate-800 ">earlist</option>
  
   
    </select>
        </div>
        </section>

     );
}
 
export default Sort;