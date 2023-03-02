import React from 'react';
import { NavLink } from 'react-router-dom';

const item = [
  { name: "Home", to: "/" },
  { name: "ProductList", to: "/ProductList" },
  { name: "About", to: "/About" },
 
  
];

const Navbar = ({totalItem}) => {
    return (
        <header className="w-full h-24 fixed top-0   bg-slate-800 ">

<div className=" text-slate-200  h-full w-full flex justify-start items-center max-[768px]:justify-between max-[768px]:pr-4">

       
       
       <nav className=' w-2/5'  >
      <ul className='flex flex-row items-center '>
        {item.map((item) => {
          return (
            <li key={item.to} className='px-1 mx-3 text-slate-300 font-bold  border-b-2 rounded-md  border-slate-300 hover:text-lg duration-200 hover:text-slate-100 max-[640px]:text-sm' >
              <NavLink
             
                className={(navData) =>
                  navData.isActive ? " text-slate-400  px-2    max-[640px]:text-sm" : ""
                }
              
                to={item.to}
              >
                {item.name }

               
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
      
       <div className='flex flex-row justify-center items-center ml-12  max-[640px]:flex-col max-[640px]:ml-0 max-[640px]:mt-8'>
       <h2 className="font-bold max-[768px]:text-xs">Products Shopping</h2>
        <span className="w-6 h-6 bg-slate-300 rounded-full ml-3 flex justify-center items-center text-slate-500 text-sm font-bold max-[640px]:my-3 max-[640px]:w-3 max-[640px]:h-3 ">{totalItem}</span>
  
        </div>
       </div>
        </header>
      );
}
 
export default Navbar;