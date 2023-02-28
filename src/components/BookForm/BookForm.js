import React,{ useState } from 'react';
import styles from "./BookForm.module.css"
const BookForm = ({addproduct,addcategory,edit}) => {
    const [product,setProduct]=useState( edit ? {productName:edit.productName,categoryId:edit.categoryId,quantity:edit.quantity}: {productName:"",categoryId:"",quantity:0});
    // const[categoryName,setCategoryName]=useState("");
    const changeHandler=({target})=>{
    
        setProduct({...product,[target.name]:target.value});
      
    }
   
    const submitHanler=(e)=>{
        e.preventDefault();
         addproduct(product);
      //  console.log(product);
        setProduct({productName:"",categoryId:"",quantity:""});
       // setCategoryName("");
    }
    return (  
        <section className="w-full mx-2 max-w-2xl">
            
<h1 className=" text-slate-200 text-lg font-bold border-b my-4 py-4 mx-10 border-slate-400 max-[640px]:text-sm">{ edit ? "Edit Product" : "Add New Product"}</h1>

            <div  className=" w-4/5 mx-auto lg:w-4/5 bg-slate-800  h-1/5 flex  items-center rounded-md mt-10 mb-20"  >

            <form className="flex  flex-col   text-xs w-full my-5 text-slate-200">
                <div className="flex flex-row  mb-5 w-full ">
                <label  className='text-xs  text-slate-200 '>  Book Name :</label>
        <input className="w-2/5 h-8 rounded-md ml-7 bg-transparent focus:outline focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 " type="text"  value={product.productName} onChange={changeHandler} name="productName" >
        </input>
                </div>
                <div className="flex flex-row mb-3 ml-8 w-full">
                <label className='text-xs  text-slate-200 '> quantity :</label>
        <input className="w-2/5 h-8 rounded-md  ml-4 bg-transparent focus:outline focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 " type="number"  value={product.quantity} onChange={changeHandler} name="quantity" >
        </input>
                </div>
        <div className="flex flex-row mb-5  w-full">
        <label className='text-xs  text-slate-200 '> Category Name :</label>

<select  className='rounded-md mt-2 ml-5 w-1/3 text-slate-800 text-xs h-2/4' onChange={changeHandler} name="categoryId" value={product.categoryId} >
<option value="">select Category</option>
  
    {addcategory.map((p)=>{
return <option key={p.id} value={p.id} >{p.category}</option>
    })}
    </select>
        </div>
        <div className='w-full flex justify-center mt-4 mr-8 '>
            <button className="   w-40 h-8 bg-slate-600 text-slate-200 rounded-md" onClick={submitHanler}> {edit ? "Edit Product" :"Add Product"}</button></div>
            </form>
            </div>
        </section>
    );
}
 
export default BookForm;
