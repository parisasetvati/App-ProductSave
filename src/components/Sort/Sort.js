const Sort = ({sort,onSort}) => {
    return ( 
        <section lassName="mx-8 my-10 ">

        
        <div className="w-full flex justify-between items-center px-6 my-8 max-w-full  max-[450px]:flex-col max-[450px]:items-start">
            <label className="text-slate-300 text-lg  ml-2 max-[640px]:text-sm">Sort</label>
            <select  className="bg-transparent border border-slate-500 rounded-lg px-3 py-1 w-2/6 text-slate-300 max-[450px]:mt-4 max-[450px]:ml-0 max-[450px]:w-full" onChange={onSort}  value={sort} >
<option className="text-slate-800 " >latest</option>
<option className="text-slate-800 ">earlist</option>
  
   
    </select>
        </div>
        </section>

     );
}
 
export default Sort;