import { BiTrash,BiMessageSquareEdit} from "react-icons/bi";
import { useState } from "react";
import BookForm from "../BookForm/BookForm";
import 'react-tooltip/dist/react-tooltip.css';
import { NavLink } from "react-router-dom";
import {Tooltip } from 'react-tooltip'
const BookList = ({productlist,categories,setProductlist,addcategory,onUpdate}) => {
  const[edit,setEdit]=useState({productName:"",id:null,category:"",creatEdit:""})

  
    const findCategory=(categoryId)=> {
  return  categories.find((c)=>c.id === parseInt(categoryId)).category};
  const deleteProduct=(id)=>{
 const filterProduct= productlist.filter((p)=>p.id !== id);
setProductlist(filterProduct);

  }
  const onUpdateProduct = (product) => {
    
    onUpdate(edit.id ,product);
    if( product.productName && product.quantity && product.categoryId)  {
    
     setEdit({productName:"",id:null,category:"",creatEdit:""})
  
  };
  };

  const renderProduct=()=>{
    
 

   return <div  className="flex flex-col  h-full justify-center items-center mx-auto w-full "  >
    
    <h1 className=" text-slate-200 text-lg font-bold border-b w-full py-2 my-5 border-slate-400 max-w-full max-[640px]:text-sm">Product List</h1>
    {productlist.map((products)=>{
    // console.log(products);
     return <div  key={products.id}   className=" w-full pb-6  px-3  text-sm font-bold  flex flex-row  items-center justify-between    text-slate-400  max-w-full mx-3 my-6  border-b border-slate-400 max-[640px]:flex-row max-[640px]:pb-6 max-[640px]:my-3 ">

     <div>
     <span className="text-lg mx-6 "> {products.productName} </span> 
      </div>
      
      <div className="flex items-center  ">
        <div className="flex items-center">
  
      <span className="mx-4 w-auto h-6  border-2 border-slate-700 rounded-md px-6   flex justify-center items-center text-slate-300 text-sm ">{findCategory(products.categoryId)}</span> 
      
     <span className=" mx-4 w-6 h-6 bg-slate-300 rounded-full  flex justify-center items-center text-slate-500 text-sm  ">{products.quantity}</span> 
 
   </div>
   <div className="flex items-center ">
     <button className="mx-4 flex justify-center items-center border-red-700 border-2 w-8 h-8 bg-transparent text-slate-200 rounded-md text-sm hover:text-lg hover:text-red-700 hover:bg-slate-300 " onClick={()=>deleteProduct(products.id)}><BiTrash className=" text-md font-bold" /></button>
     <button className="mx-4 flex justify-center items-center border-slate-400 border-2 w-8 h-8 bg-transparent text-slate-200 rounded-md text-xs hover:bg-slate-300 hover:text-slate-800  hover:border-slate-700 "  data-tooltip-id="my-tooltip"  data-tooltip-content= {products.creatEdit &&   new Date(products.creatEdit).toLocaleString("fa-IR")} onClick={()=>setEdit(products)} ><BiMessageSquareEdit className=" text-lg font-bold" /></button>
     <div>
      
        <span className="mx-1  h-4  border-2 border-slate-700  rounded-md px-6 py-4 flex justify-center items-center text-slate-300 text-sm max-[640px]:hidden ">{new Date(products.createdArt).toLocaleDateString("fa-IR")}</span> 
        
     {/* <div className="flex flex-col item-center justify-center "> */}
     <Tooltip id="my-tooltip"/>
     </div>
     {/* <label className={`${products.creatEdit ? "": "hidden"} text-sm`}>Last Edit:</label> */}
     {/* <span className={`${products.creatEdit ? "": "hidden"} mx-1  w-20 h-10 bg-slate-300 border-2 border-slate-700      rounded-md px-8 py-3 flex justify-center items-center text-slate-500 text-sm "`}>{ new Date(products.creatEdit).toLocaleString("fa-IR")}</span>  */}
     {/* <div className={show ?  '' : 'hidden'} >
      LastEdit:{ new Date(hover.creatEdit).toLocaleString("fa-IR")}
     </div> */}
      {/* </div> */}
    
      </div>
      </div>
     
         </div>})
         };
  <div className='w-full flex justify-start items-center mb-10 ml-20'>
            
            <NavLink to="/"><span className='text-slate-300 mb-5 font-bold border-b-2 p-1 rounded-md text-sm hover:border-slate-700 hover:text-slate-700 hover:bg-slate-300'>Home Page</span></NavLink>
            </div>
 </div> 

  };
    return (  
      <div className="w-3/5 max-[768px]:w-full">

 {edit.id ? <BookForm   addproduct={onUpdateProduct} addcategory={addcategory}  edit={edit}/> :  renderProduct()}
 
      </div>
     
    
)};
 
export default BookList;