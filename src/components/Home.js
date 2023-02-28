import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCategory from "./AddCategory/AddCategory";
import BookForm from "./BookForm/BookForm";
import BookList from "./BookList/BookList";
import Filtercategory from "./Filtercategory/Filtercategory";
import styles from "./Home.module.css";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search.js";
import Sort from "./Sort/Sort";
import About from "./About/About";


import { Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout";
import ProductEdit from "./ProductEdit/ProductEdit";

const Home = () => {
  const [productlist, setProductlist] = useState([]);
  const [addcategory, setAddCategory] = useState([]);
  const[filterproduct, setFilterProduct]=useState([]);
  const[searchValue,setSearchValue]=useState("");
  const[sort,setSort]=useState("latest");
 const [filtercategory, setFilterCategory]=useState("");
  const addproduct = (product) => {
  // console.log(product);
  if(! product.productName && !product.quantity && ! product.categoryId)  {
    toast.error("please Enter Product Complete!",{
        
      className:'toast-message'
 });
    // NotificationManager.warning('Warning message', 'Please input ProductName', 3000)
  }
  else if (! product.productName){
    toast.error("please Enter Product Name!",{
        
      className:'toast-message'
 });
  }
  else if(! product.quantity){
    toast.error("please Enter Product quantity!",{
        
      className:'toast-message'
 });;
  }
  else if(! product.categoryId){
    toast.error("please Enter Product Category!",{
        
      className:'toast-message'
 });
  }
    else{
  //   // console.log(bookName, categoryName);
    const newProduct= {...product , createdArt: new Date().toISOString(),id:new Date().getTime()}
    setProductlist([
      ...productlist,newProduct
    ]);
    toast.success("Product Added Success.",{
        
      className:'toast-message'
 });
   };
  };

  const AddToCategoryHandler = (categoris) => {
    if(!categoris.category && !categoris.description)  {
      
      
        toast.error("Please Enter Category Complete!",{
        
          className:'toast-message'
     });
    }
    else if(! categoris.category){
      toast.error("Please Enter Category Name!",{
      
        className:'toast-message'
   });
    }
    else if(! categoris.description){
      toast.error('Please Set Description!', {
      
         className:'toast-message'
    });
      
    }
    else{
      const newCategory= {...categoris , createdArt: new Date().toISOString(), id:new Date().getTime()}
    setAddCategory([...addcategory,newCategory]);
    
    toast.success("Category Added Success", {
      closeButton: true,
      
       className:'toast-message'
   });
    
    }
  };
const onUpdate=(id,product)=>{

  
   // console.log(id, newValue);
    const index = productlist.findIndex((product) => product.id === id);
    const selectProduct = { ...productlist[index] };
    selectProduct.productName = product.productName;
    selectProduct.quantity=product.quantity;
    selectProduct.categoryId=product.categoryId;
    selectProduct.creatEdit=new Date().toISOString();
    //console.log(selectTodo.name);
    const updateProduct = [...productlist];
    updateProduct[index] = selectProduct;
    setProductlist(updateProduct);


};
  const searchHandler=(e)=>{
setSearchValue(e.target.value.trim().toLowerCase());
  }
  const sortHandler=(e)=>{
    setSort(e.target.value);
      }
      const filterHandler=(e)=>{
        setFilterCategory(e.target.value);
      }
  const filterSearchTitle=(array)=>{
    console.log(array);
    return array.filter((p)=> p.productName.toLowerCase().includes(searchValue))};

 const filterSort=(array)=>{
 
  let sortProducts=[...array];
  return sortProducts.sort((a,b)=>{
    if(sort==="latest"){
      return new Date(a.createdArt)>new Date(b.createdArt)?-1 :1}
      else if  (sort==="earlist"){
      return new Date(a.createdArt)>new Date(b.createdArt)? 1 :-1}
    })
  };
  const filterCategoryItem=(array)=>{
    if (filtercategory===""){return array}

  else{
    return array.filter((p)=>p.categoryId===filtercategory)
  }  
  }
  useEffect(()=>{
    let result=productlist;
    result=filterSearchTitle(result);
    result=filterSort(result);
    result=filterCategoryItem(result);
    setFilterProduct(result);
  },[productlist,searchValue,sort,filtercategory]);
  useEffect(()=>{
    const savedProducts=JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories=JSON.parse(localStorage.getItem("categories")) || [];
    setProductlist(savedProducts);
    setAddCategory(savedCategories);
  },[]);
  useEffect(()=>{  if (productlist.length){
    localStorage.setItem("products",JSON.stringify(productlist))
  }},[productlist]);
  useEffect(()=>{  if (addcategory.length){
    localStorage.setItem("categories",JSON.stringify(addcategory))
  }},[addcategory]);
  return (
    <section className="w-full">
      {/* <Navbar totalItem={productlist.filter((p) => p.id > 0).length} /> */}
      <Layout productlist={productlist}>
      <Routes>
            

      <Route path="/" element={<div className="   w-full flex flex-col items-center justify-center">
      <AddCategory categoryHandler={AddToCategoryHandler} />
      <BookForm addproduct={addproduct} addcategory={addcategory} />
      </div>} />
            <Route path="/About" element={<About />} />
            <Route path="/ProductList" element={  <div className=" w-full flex flex-col items-center justify-center">
      <section className="mx-6 my-8 w-3/5">
        

<h1 className=" text-slate-200 text-lg font-bold border-b my-4 mx-10 py-4  border-slate-400 max-[640px]:text-sm">Filter Product</h1>
      <Search  searchValue={searchValue} onSearch={searchHandler} />
   <Sort sort={sort} onSort={sortHandler}/>
   <Filtercategory filtercategory={filtercategory} onfilter={filterHandler} addcategory={addcategory}/> 
    </section>
      <BookList productlist={filterproduct} categories={addcategory} onUpdate={onUpdate}  setProductlist={setProductlist} addcategory={addcategory}/>
      
      </div>
      }/>
            {/* <Route path="/ProductEdit" element={<ProductEdit/>} /> */}
           
          </Routes>
        
     {/* <div className="lg:flex lg:flex-row lg:item-center "> */}
      {/* <div className="lg:w-full">
      <AddCategory categoryHandler={AddToCategoryHandler} />
      <BookForm addproduct={addproduct} addcategory={addcategory} />
      </div> */}
      {/* <div className="lg:w-full">
      <section className="mx-6 my-8">
        

<h1 className=" text-slate-200 text-lg font-bold border-b my-4 mx-10 py-4  border-slate-400">Filter Product</h1>
      <Search  searchValue={searchValue} onSearch={searchHandler} />
   <Sort sort={sort} onSort={sortHandler}/>
   <Filtercategory filtercategory={filtercategory} onfilter={filterHandler} addcategory={addcategory}/> 
    </section>
      <BookList productlist={filterproduct} categories={addcategory} onUpdate={onUpdate}  setProductlist={setProductlist} addcategory={addcategory}/>
      
      </div>*/}
      {/* </div>  */}
      </Layout>
     </section>
     
    
    
     
     
      
  
  );
};

export default Home;
