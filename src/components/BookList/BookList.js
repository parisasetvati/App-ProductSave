import { BiTrash, BiMessageSquareEdit } from "react-icons/bi";
import { useState } from "react";
import React from "react";
import BookForm from "../BookForm/BookForm";
import "react-tooltip/dist/react-tooltip.css";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactModal from "react-modal";
import EditModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const BookList = ({
  productlist,
  categories,
  setProductlist,
  addcategory,
  onUpdate,
}) => {
  const [edit, setEdit] = useState({
    productName: "",
    id: null,
    category: "",
    creatEdit: "",
  });

  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const[idNumber,setIdnumber]=useState('');
  function openModal() {
    setIsOpen(true);
  }
  function openModal1() {
    setIsOpen1(true);
  }
  function closeModal1() {
    setIsOpen1(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
    // setIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const findCategory = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).category;
  };
  const deleteProduct = () => {
   // console.log(parseInt(id));
    const filterProduct = productlist.filter((p) => p.id !== parseInt(idNumber));
    setProductlist(filterProduct);
    closeModal();
    setIdnumber("");
  };
  const onUpdateProduct = (product) => {
    onUpdate(edit.id, product);
    if (product.productName && product.quantity && product.categoryId) {
      setEdit({ productName: "", id: null, category: "", creatEdit: "" });
      closeModal1();
    }
  };
  const handleEdit = (products) => {
    openModal1();
    setEdit(products);
  };
  const handlerDelete = (id) => {
   setIdnumber(id);
    //deleteProduct(id);
    openModal();
  console.log(id);
    //closeModal();
  };

  const renderProduct = () => {
    return (
      <div className="flex flex-col   justify-center items-center mx-auto w-full ralative">
        <h1 className=" text-slate-200 text-lg font-bold border-b w-full py-2 my-5 border-slate-400 max-w-full max-[640px]:text-sm">
          product List
        </h1>
        {productlist.map((products) => {
          return (
            <div
              key={products.id}
              className=" w-full pb-4 px-3  text-sm font-bold  flex flex-row  items-center justify-between    text-slate-400  max-w-full mx-3 my-6  border-b border-slate-400 max-[640px]:flex-col max-[640px]:pb-6 max-[640px]:my-6 "
            >
              <div className=" pb-4">
                <span className="text-lg mx-6 "> {products.productName} </span>
              </div>

              <div className="flex items-center  ">
                <div className="flex items-center">
                  <span className="mx-4 w-auto h-6  border-2 border-slate-700 rounded-md px-6   flex justify-center items-center text-slate-300 text-sm ">
                    {findCategory(products.categoryId)}
                  </span>

                  <span className=" mx-4 w-6 h-6 bg-slate-300 rounded-full  flex justify-center items-center text-slate-500 text-sm  ">
                    {products.quantity}
                  </span>
                </div>
                <div className="flex items-center ">
                  <button
                    className="mx-4 flex justify-center items-center border-red-700 border-2 w-8 h-8 bg-transparent text-slate-200 rounded-md text-sm hover:text-lg hover:text-red-700 hover:bg-slate-300 "
                    onClick={()=>handlerDelete(products.id)}
                  >
                    <BiTrash className=" text-md font-bold" />
                  </button>
                  <button
                    className="mx-4 flex justify-center items-center border-slate-400 border-2 w-8 h-8 bg-transparent text-slate-200 rounded-md text-xs hover:bg-slate-300 hover:text-slate-800  hover:border-slate-700 "
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={
                      products.creatEdit &&
                      new Date(products.creatEdit).toLocaleString("fa-IR")
                    }
                    onClick={() => handleEdit(products)}
                  >
                    {/* () => setEdit(products) */}
                    <BiMessageSquareEdit className=" text-lg font-bold" />
                  </button>
                  <div>
                    <span className="mx-1  h-4  border-2 border-slate-700  rounded-md px-6 py-4 flex justify-center items-center text-slate-300 text-sm max-[640px]:hidden ">
                      {new Date(products.createdArt).toLocaleDateString(
                        "fa-IR"
                      )}
                    </span>

                    <Tooltip id="my-tooltip" />
                  </div>
                </div>
              </div>
              <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={() => closeModal}
                style={{ overlay: { background: "transparent" } }}
                contentLabel=" Modal"
                className="w-2/5 h-1/4 flex flex-col justify-center item-center relative top-1/2  m-auto rounded-md bg-slate-800 border border-slate-400 "
              >
                <button onClick={closeModal}>
                  <AiOutlineCloseCircle className="absolute top-2 right-4 font-bold  text-lg text-slate-200   hover:text-slate-500 hover:text-xl max-[600px]:hidden" />
                </button>

                <div className="relative mt-5">
                  <h2 className="text-slate-200 text-center font-bold  max-[900px]:font-normal max-[700px]:text-sm">
                    {" "}
                    Do You Sure Delete Product
                  </h2>
                </div>
                <div className="flex justify-center items-center  mb-4">
                  <button
                    className=" w-28 h-8 bg-slate-600 font-bold text-slate-200 rounded-md hover:bg-slate-300  hover:text-slate-900 m-4 max-[900px]:font-normal max-[900px]:w-28 max-[700px]:text-sm max-[500px]:h-6"
                    onClick={closeModal}
                  >
                    Cancle
                  </button>

                  <button
                    className=" w-28 h-8 bg-slate-600 font-bold text-slate-200 rounded-md hover:bg-slate-300  hover:text-slate-900 m-4  max-[900px]:w-28 max-[900px]:font-normal max-[700px]:text-sm max-[500px]:h-6 "
                    onClick={() =>deleteProduct()}
                  >
                    Delete
                  </button>
                </div>
              </ReactModal>
              <EditModal
                isOpen={modalIsOpen1}
                onAfterOpen={afterOpenModal}
                onRequestClose={() => closeModal1}
                style={{ overlay: { background: "transparent" } }}
                contentLabel=" Modal"
                className="w-3/5 h-5/7 flex flex-col justify-center item-center relative z-10  top-28 m-auto rounded-md bg-slate-800 border border-slate-400 max-[900px]:w-4/5 2xl:w-2/5"
              >
                <button onClick={closeModal1}>
                  <AiOutlineCloseCircle className="absolute top-2 right-4 font-bold  text-lg text-slate-200   hover:text-slate-500 hover:text-xl max-[600px]:hidden" />
                </button>
                <BookForm
                  addproduct={onUpdateProduct}
                  addcategory={addcategory}
                  edit={edit}
                />
              </EditModal>
            </div>
          );
        })}
        ;
        <div className="w-full flex justify-start items-center mb-10 ml-20">
          <NavLink to="/">
            <span className="text-slate-300 mb-5 font-bold border-b-2 p-1 rounded-md text-sm hover:border-slate-700 hover:text-slate-700 hover:bg-slate-300">
              Home Page
            </span>
          </NavLink>
        </div>
      </div>
    );
  };
  return <div className="w-3/5"> {renderProduct()}</div>;
};

export default BookList;
