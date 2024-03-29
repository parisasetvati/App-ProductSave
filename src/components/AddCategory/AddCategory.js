import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

import "react-notifications/lib/notifications.css";
const validationSchema = Yup.object({
  category: Yup.string()
    .required("category is Required")
    .matches(/^[A-Za-zآ-ی\s]+$/, "name in not  valid")
    .min(4, "category lentgh is not valid"),

  description: Yup.string().required("description is required"),
});

const initialValues = {
  category: "",
  description: "",
};

const AddCategory = ({ categoryHandler }) => {
  const [categoris, setCategoris] = useState({ category: "", description: "" });
  const [isShow, setIsShow] = useState(false);
  const onSubmit = (id, { resetForm }) => {
   
      
      categoryHandler(id);
      resetForm();
    
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

 

  return (
    <section className="w-full mx-2 max-w-2xl relative">
      <div className={` ${isShow ? "" : "hidden"}`}>
        <h1 className="text-slate-200 text-lg font-bold border-b my-8 py-4 mx-10 border-slate-400 max-[640px]:text-sm">
          Add New Category
        </h1>

        <div className=" w-4/5  mx-auto lg:w-4/5  h-1/5 bg-slate-800 flex justify-center items-center rounded-md  mt-10 mb-20">
          <form
            onSubmit={formik.handleSubmit}
            className="flex  flex-col   text-xs w-full my-5 text-slate-200"
          >
            <div className="flex flex-row  my-5 w-full ml-8  max-[600px]:flex-col max-[600px]:items-start max-[600px]:ml-2">
              <label className="text-xs w-20  text-slate-200  max-[600px]:ml-4">
                {" "}
                Category :
              </label>
              <input
                className="w-3/6 h-8  rounded-md  bg-transparent focus:outline focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 max-[600px]:ml-4 max-[600px]:mt-4 max-[600px]:w-4/5"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
                name="category"
              ></input>
              {formik.errors.category && formik.touched.category && (
                <div className="text-red-600 mt-5 ml-3">
                  {formik.errors.category}
                </div>
              )}
            </div>
            <div className="flex flex-row mb-5 ml-8 w-full max-[600px]:flex-col max-[600px]:items-start max-[600px]:ml-2">
              <label className=" text-xs w-20 text-slate-200  max-[600px]:ml-4">
                {" "}
                Description :
              </label>
              <textarea
                className="w-3/6  h-15 rounded-md  bg-transparent  border-slate-500 max-[600px]:ml-4 max-[600px]:mt-4 max-[600px]:w-4/5"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                name="description"
              ></textarea>
              {formik.errors.description && formik.touched.description && (
                <div className="text-red-600 mt-5 ml-3">
                  {formik.errors.description}
                </div>
              )}
            </div>
            <div className="mt-5 mx-auto font-bold flex justify-center items-center ">
              <button
                className="w-32  h-8 text-xs text-slate-500  border  border-slate-500 rounded-md mr-6 hover:border-slate-200 hover:text-slate-200 max-[450px]:w-24"
                onClick={() => setIsShow(!isShow)}
              >
                Cancle
              </button>

              <button
                className="w-32 h-8 bg-slate-600 text-xs text-slate-200 rounded-md   disabled:bg-gray-500 disabled:text-gray-400 disabled:hover:bg-gray-500 disabled:hover:text-gray-400 disabled:cursor-not-allowed max-[450px]:w-24"
                disabled={!formik.isValid}
              >
                AddCategory
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full mx-auto mt-10">
        <button
          className={`${
            isShow && "hidden"
          } w-1/4 flex justify-start text-slate-200 text-lg font-bold border-b my-4 py-2 ml-10  border-slate-300 hover:text-slate-400 duration-150  max-[640px]:text-sm`}
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          Add New Category
        </button>
      </div>
    </section>
  );
};

export default AddCategory;
