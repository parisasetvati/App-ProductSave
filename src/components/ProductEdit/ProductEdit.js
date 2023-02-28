// import { useState } from "react";

// const ProductEdit = ({edit,newValue,setnewValue,onUpdate}) => {
//     const changeHandler=(e)=>{
//         setnewValue({...newValue,[e.target.name]:e.target.value});
//     }
//    const onUpdateProduct=()=>{
    
//     onUpdate();
//  setEdit({productName:"", id:"", quantity:0}); }
//    // console.log(id,newValue);
   
//     return ( 
//         <section className="w-full">
//             <div  className="bg-slate-800 w-2/5 h-1/5 flex  items-center rounded-md mx-auto mt-10"  >

//             <form className="flex  flex-col   text-xs w-full my-5 text-slate-200">
//                 <div className="flex flex-row  mb-5 w-full ">
//                 <label  className='text-xs  text-slate-200 '>  Book Name :</label>
//         <input className="w-2/5 h-8 rounded-md ml-7 bg-transparent focus:outline focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 " type="text"   name="productName" value={newValue.productName} onChange={changeHandler} >
//         </input>
//                 </div>
//                 <div className="flex flex-row mb-3 ml-8 w-full">
//                 <label className='text-xs  text-slate-200 '> quantity :</label>
//         <input className="w-2/5 h-8 rounded-md  ml-4 bg-transparent focus:outline focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 " type="number"  name="quantity" value={newValue.quantity} onChange={changeHandler}>
//         </input>
//                 </div>
//         <div className="flex flex-row mb-5  w-full">
//         <label className='text-xs  text-slate-200 '> Category Name :</label>

// {/* <select  className='rounded-md mt-2 ml-5 w-1/3 text-slate-800 text-xs h-2/4'  name="categoryId"  >
// <option value="">select Category</option>
  
//     {addcategory.map((p)=>{
// return <option key={p.id} value={p.id} >{p.category}</option>
//     })}
//     </select> */}
//         </div>
//         <div className='w-full flex justify-center mt-4 mr-8 '>
//             <button className="   w-40 h-8 bg-slate-600 text-slate-200 rounded-md" onClick={onUpdateProduct()} >Edit Product</button></div>
//             </form>
//             </div>
//         </section> 
//      );
// }
 
// export default ProductEdit;