import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const validationSchema = Yup.object({
  productName: Yup.string()
    .required("name is Required")
    .matches(/^[A-Za-zآ-ی\s]+$/, "name in not  valid")
    .min(4, "name lentgh is not valid"),
  quantity: Yup.number()
    .integer()
    .required("Quantity is valid")
    .min(1, "quantity Incorrect")
    .max(999, "quantity Incorrect")
    .nullable(),
  categoryId: Yup.string().required("catrgory is required"),
});

const initialValues = {
  productName: "",
  quantity: "",
  categoryId: "",
};

const BookForm = ({ addproduct, addcategory, edit, setEdit }) => {
  const [product, setProduct] = useState(
    edit
      ? {
          productName: edit.productName,
          categoryId: edit.categoryId,
          quantity: edit.quantity,
        }
      : { productName: "", categoryId: "", quantity: 0 }
  );
  const onSubmit = (id, { resetForm }) => {
    addproduct(id);
    resetForm();
  };
  const formik = useFormik({
    initialValues: edit || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <section className="w-full mx-2 max-w-2xl">
      <h1 className=" text-slate-200 text-lg font-bold border-b my-4 py-4 mx-10 border-slate-400 max-[640px]:text-sm">
        {edit ? "Edit Product" : "Add New Product"}
      </h1>

      <div className=" w-4/5 mx-auto lg:w-4/5 bg-slate-800  h-3/5 flex  items-center rounded-md mt-10 mb-10">
        <form
          onSubmit={formik.handleSubmit}
          className=" flex  flex-col   text-xs w-full my-5 text-slate-200 "
        >
          <div className="flex flex-row  my-5 ml-5 w-full max-[400px]:flex-col max-[400px]:items-start max-[400px]:ml-2 ">
            <label className="text-xs  text-slate-200 mt-2 max-[400px]:ml-4 ">Name</label>

            <input
              id="productName"
              name="productName"
              type="text"
              className="w-2/5 h-8 rounded-md ml-7 bg-transparent focus:outline  border focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 max-[400px]:ml-4 max-[400px]:mt-4 max-[400px]:w-4/5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productName}
            />
            {formik.errors.productName && formik.touched.productName && (
              <div className="text-red-600 mt-5 ml-3">
                {formik.errors.productName}
              </div>
            )}
          </div>
          <div className="flex flex-row  my-5 ml-5 w-full max-[400px]:flex-col max-[400px]:items-start max-[400px]:ml-2  ">
            <label className="text-xs  text-slate-200 mt-2 max-[400px]:ml-4 ">quantity</label>

            <input
              id="quantity"
              name="quantity"
              type="text"
              className="w-2/5 h-8 rounded-md ml-6 bg-transparent focus:outline  border focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 max-[400px]:ml-4 max-[400px]:mt-4 max-[400px]:w-4/5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quantity}
            />
            {formik.errors.quantity && formik.touched.quantity && (
              <div className="text-red-600 mt-5 ml-3">
                {formik.errors.quantity}
              </div>
            )}
          </div>
          <div className="flex flex-row mb-6 ml-5 mt-4 w-full max-[400px]:flex-col max-[400px]:items-start max-[400px]:ml-2 ">
            <label className="text-xs  text-slate-200 mt-2  max-[400px]:ml-4">
              Category Name :
            </label>

            <select
              name="categoryId"
              className="rounded-md ml-4 w-1/3 text-slate-800 border-2 text-xs h-2/4 max-[400px]:ml-4 max-[400px]:mt-4 max-[400px]:w-4/5"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryId}
            >
              <option value="">select Category</option>

              {addcategory.map((p) => {
                return (
                  <option key={p.id} value={p.id}>
                    {p.category}
                  </option>
                );
              })}
            </select>
            {formik.errors.categoryId && formik.touched.categoryId && (
              <div className="text-red-600 mt-5 ml-3">
                {formik.errors.categoryId}
              </div>
            )}
          </div>
               {" "}
          <div className="w-full flex justify-center mt-4 mr-8 ">
            <button
              className=" w-40 h-8 bg-slate-600 font-bold text-slate-200 rounded-md hover:bg-slate-300  hover:text-slate-900 disabled:bg-gray-500 disabled:text-gray-400 disabled:hover:bg-gray-500 disabled:hover:text-gray-400 disabled:cursor-not-allowed max-[450px]:w-24"
              type="submit"
              disabled={!formik.isValid}
            >
              {" "}
              {edit ? "Edit Product" : "Add Product"}
            </button>
               
          </div>
        </form>
      </div>
      {edit ? (
        ""
      ) : (
        <div className="w-full flex justify-start items-center mb-10 ml-20">
          <NavLink to="/ProductList">
            <span className="text-slate-300 mb-5 font-bold border-b-2 p-1 rounded-md text-sm hover:border-slate-700 hover:text-slate-700 hover:bg-slate-300">
              {" "}
              Show productList
            </span>
          </NavLink>
        </div>
      )}
    </section>
  );
};

export default BookForm;
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Formik, useFormik } from "formik";
// import * as Yup from "yup";

// const initialValues = {
//   productName: "",
//   categoryId: "",
//   quantity: 0,
// };
// const validationSchema = Yup.object({
//   productName: Yup.string()
//     .required("ProductName is Required")
//     .min(4, "name lentgh is not valid")
//     .matches(/^[A-Za-z]+$/, "name Incorrect"),

//   quantity: Yup.string()
//     .required("Quantity is valid")
//     .matches(/^[1-9]$/, "Invalid quantity")
//     .min(1, "quantity Incorrect")
//     .max(4, "quantity Incorrect")
//     .nullable(),
//   categoryId: Yup.string().required("catrgory is required"),
// });

// const BookForm = ({ addproduct, addcategory, edit }) => {
//   // const [product,setProduct]=useState( edit ? {productName:edit.productName,categoryId:edit.categoryId,quantity:edit.quantity}: {productName:"",categoryId:"",quantity:0});
//   // const[enterValue,setEnterValue]=useState({productName:"",categoryId:"",quantity:0});
//   // const [error, setError] = useState([]);
//   // const [isValue, setIsValue] = useState({productName:"" ,quantity:0, categoryId:""});
//   // const onSubmit = (values)=>{

//   //   console.log(values);

//   //   // addproduct(initialValues);
//   // }
//   // const formik = useFormik({
//   //   initialValues: edit || initialValues,

//   //   onSubmit: values => {
//   //     alert(JSON.stringify(values, null, 2));
//   //   },
//   //   validationSchema,
//   //   validateOnMount: true,
//   //   // enableReinitialize: true,
//   // });
//   const formik = useFormik({
//     initialValues,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//     validationSchema,
//     validateOnMount: true,
//   });
//   // console.log(formik.values);
//   // const changeHandler=({target})=>{
//   //     if (error.includes(target.name)) {
//   //         setError(error.filter((e) => e !== target.name));
//   //       }
//   //       if ((isValue.productName!==""|| isValue.quantity!==0 || isValue.categoryId!=="")) {
//   //         setIsValue({...isValue,[target.name]:target.value});
//   //       }
//   //     setProduct({...product,[target.name]:target.value});
//   // //   setEnterValue({...enterValue,[target.name]:target.value})
//   // }

//   // const submitHanler=(e)=>{
//   //     e.preventDefault();
//   //      addproduct(product);
//   // {!product.productName && product.quantity && product.categoryId ? "border-red-600 ": "border-green-600"}

//   //   const errorList = [];
//   //   if ( (!(product.productName).replace( /u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*/gi, '') || (product.productName=== "")
//   // )) {
//   //       errorList.push("productName");
//   //     }
//   //     if (product.quantity<=0 || product.quantity=== "") {
//   //       errorList.push("quantity");
//   //     }
//   //     if (product.categoryId==="") {
//   //       errorList.push("categoryId");
//   //     }
//   //     setError(errorList);
//   //     console.log(errorList);
//   //     console.log(error);
//   //     const valueList=[];
//   //     if (product.productName !== "") {
//   //       valueList.push(product.productName);
//   //     }
//   //     if (product.quantity !== 0) {
//   //       valueList.push(product.quantity );
//   //     }
//   //     if (product.categoryId  !== "") {
//   //       valueList.push(product.categoryId);
//   //     }
//   //     setIsValue(valueList);
//   //     // console.log(isValue);
//   //     // console.log(valueList);
//   //     if( (( product.productName).replace(/[u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]/gi, ''))  && (product.quantity>0) && (product.categoryId))  {

//   //       setProduct({productName:"",categoryId:"",quantity:""});
//   //       setIsValue({productName:"" ,quantity:0, categoryId:""});
//   //       // setError([]);
//   //       //  setEnterValue( {enterProduct:"",enterCategory:"",enterQuantity:0});
//   //   }

//   // console.log(formik);

//   return (
//     <section className="w-full mx-2 max-w-2xl ">
//       <h1 className=" text-slate-200 text-lg font-bold border-b my-4 py-4 mx-10 border-slate-400 max-[640px]:text-sm">
//         {edit ? "Edit Product" : "Add New Product"}
//       </h1>

//       <div className=" w-4/5 mx-auto lg:w-4/5 bg-slate-800  h-1/5 flex  items-center rounded-md mt-10 mb-10">
//         <form
//           onSubmit={formik.handleSubmit}
//           className=" flex  flex-col   text-xs w-full my-5 text-slate-200 "
//         >
//           <div className="flex flex-row  my-5 ml-5 w-full ">
//             {/* <label  className='text-xs  text-slate-200 '>  Book Name :</label> */}
//             {/* <input className= {` ${error.includes("productName") ? "border-red-600"  : ""} w-2/5 h-8 rounded-md ml-7 bg-transparent focus:outline  border focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200`}  type="text"  value={product.productName} onChange={changeHandler} name="productName" >
//         </input> */}
//             <label htmlFor="productName" className="text-xs  text-slate-200">
//               productName
//             </label>
//             <input
//               id="productN"
//               name="productName"
//               type="text"
//               className="w-2/5 h-8 rounded-md ml-7 bg-transparent focus:outline  border focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.productName}
//             />
//             {formik.errors.productName && formik.touched.productName && (
//               <div className="text-red-600 mt-5 ml-3">
//                 {formik.errors.productName}
//               </div>
//             )}
//             {/* <input  name="productName" type="text"  onChange={formik.handleChange}
//          value={formik.values.productName}/>
//       {formik.errors.productName && formik.touched.productName && (
//         <div className="text-red-600 mt-5">{formik.errors.productName} </div>)} */}
//           </div>
//           <div className="flex flex-row mb-5 ml-10 w-full">
//             {/* <label className='text-xs  text-slate-200 '> quantity :</label> */}
//             {/* <input className={`${error.includes("quantity") ? "border-red-600" : ""}  w-2/5 h-8 rounded-md  ml-6 bg-transparent border focus:outline focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200`}  type="number" min="0" value={product.quantity} onChange={changeHandler} name="quantity" >
//         </input> */}
//             <label htmlFor="quantity" className="text-xs  text-slate-200">
//               quantity
//             </label>
//             <input
//               id="quantity"
//               name="quantity"
//               type="number"
//               className=" w-2/5 h-8 rounded-md  ml-6 bg-transparent border focus:outline focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.quantity}
//             />
//             {formik.errors.quantity && formik.touched.quantity && (
//               <div className="text-red-600 mt-5 ml-3">
//                 {formik.errors.quantity}
//               </div>
//             )}
//             {/* <input  name="quantity" type="number" onChange={formik.handleChange} value={formik.values.quantity} />
//       {formik.errors.quantity && formik.touched.quantity && (
//         <div className="text-slate-300 mt-5">{formik.errors.quantity} </div>)}
//                */}
//           </div>
//           <div className="flex flex-row mb-6 ml-5 mt-4 w-full">
//             <label className="text-xs  text-slate-200 mt-2 ">
//               Category Name :
//             </label>

//             {/* <select  className={`${error.includes("categoryId") ? "border-red-600" : ""}  rounded-md ml-4 w-1/3 text-slate-800 border-2 text-xs h-2/4`} onChange={changeHandler} name="categoryId" value={product.categoryId} >
// <option value="">select Category</option>

//     {addcategory.map((p)=>{
// return <option key={p.id} value={p.id} >{p.category}</option>
//     })}
//     </select> */}
//           </div>
//           <div className="w-full flex justify-center mt-4 mr-8 ">
//             {/* <button className="   w-40 h-8 bg-slate-600 font-bold text-slate-200 rounded-md hover:bg-slate-300  hover:text-slate-800"   type="submit"> {edit ? "Edit Product" :"Add Product"}</button> */}
//             <button
//               type="submit"
//               className="w-40 h-8 bg-slate-600 font-bold text-slate-200 rounded-md hover:bg-slate-300  hover:text-slate-800"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>

//       {edit ? (
//         ""
//       ) : (
//         <div className="w-full flex justify-start items-center mb-10 ml-20">
//           <NavLink to="/ProductList">
//             <span className="text-slate-300 mb-5 font-bold border-b-2 p-1 rounded-md text-sm hover:border-slate-700 hover:text-slate-700 hover:bg-slate-300">
//               Show ProductList
//             </span>
//           </NavLink>
//         </div>
//       )}

//       {/* <form onSubmit={formik.handleSubmit} className="text-slate-300">
//        <label htmlFor="productName">productName</label>
//        <input
//          id="firstName"
//          name="productName"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.productName}
//        />
//        <label htmlFor="quantity">quantity</label>
//        <input
//          id="quantity"
//          name="quantity"
//          type="number"
//          onChange={formik.handleChange}
//          value={formik.values.quantity}
//        />
//        <label htmlFor="categoryId">categoryId</label>
//        <input
//          id="categoryId"
//          name="categoryId"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.categoryId}
//        />
//        <button type="submit">Submit</button>
//      </form> */}
//     </section>
//   );
// };

// export default BookForm;
