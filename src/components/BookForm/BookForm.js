import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const validationSchema = Yup.object({
  productName: Yup.string()
    .required("name is Required")
    .matches(/^[A-Za-zآ-ی\s]+$/, "name in not  valid")
    .min(4, "name lentgh is not valid"),
  quantity: Yup.number()
    .integer("quantity must integer")
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

      <div className=" w-4/5 mx-auto lg:w-4/5 bg-slate-800  h-3/5 flex  items-center rounded-md mt-10 mb-10 ">
        <form
          onSubmit={formik.handleSubmit}
          className=" flex  flex-col   text-xs w-full my-5 text-slate-200 "
        >
          <div className="flex flex-row  my-5 ml-14 w-full max-[600px]:flex-col max-[600px]:items-start max-[600px]:ml-2 ">
            <label className="text-xs  text-slate-200 mt-2 max-[600px]:ml-6 ">
              Name
            </label>

            <input
              id="productName"
              name="productName"
              type="text"
              className="w-3/6 h-8 rounded-md ml-8 bg-transparent focus:outline  border focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 max-[600px]:ml-6 max-[600px]:mt-4 max-[600px]:w-4/5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productName}
            />
            {formik.errors.productName && formik.touched.productName && (
              <div className="text-red-600 mt-5 ml-3 max-[600px]:ml-6">
                {formik.errors.productName}
              </div>
            )}
          </div>
          <div className="flex flex-row  my-5 ml-14 w-full max-[600px]:flex-col max-[600px]:items-start max-[600px]:ml-2  ">
            <label className="text-xs  text-slate-200 mt-2 max-[600px]:ml-6 ">
              quantity
            </label>

            <input
              id="quantity"
              name="quantity"
              type="text"
              className="w-3/6 h-8 rounded-md ml-6 bg-transparent focus:outline  border focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 max-[600px]:ml-6 max-[600px]:mt-4 max-[600px]:w-4/5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quantity}
            />
            {formik.errors.quantity && formik.touched.quantity && (
              <div className=" text-red-600 mt-5 ml-2  max-[600px]:ml-6">
                {formik.errors.quantity}
              </div>
            )}
          </div>
          <div className="flex flex-row mb-6 ml-8 mt-4 w-full max-[600px]:flex-col max-[600px]:items-start max-[600px]:ml-2 ">
            <label className="text-xs  text-slate-200 mt-2  max-[600px]:ml-6">
              Category Name :
            </label>

            <select
              name="categoryId"
              className="rounded-md ml-2 w-3/6 text-slate-800 border-2 text-xs h-2/4 max-[600px]:ml-6 max-[600px]:mt-4 max-[600px]:w-4/5"
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
              <div className="text-red-600 mt-5 ml-3 max-[600px]:ml-6">
                {formik.errors.categoryId}
              </div>
            )}
          </div>
               {" "}
          <div className="w-full flex justify-center mt-4 mr-8 ">
            <button
              className="w-3/6 h-8 bg-slate-600 font-bold text-slate-200 rounded-md hover:bg-slate-300  hover:text-slate-900 disabled:bg-gray-500 disabled:text-gray-400 disabled:hover:bg-gray-500 disabled:hover:text-gray-400 disabled:cursor-not-allowed max-[600px]:w-full max-[600px]:mx-8"
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
