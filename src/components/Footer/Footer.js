import { NavLink } from "react-router-dom";
import { FaGithub,FaWhatsapp,FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return ( 
        <footer className="
        bg-slate-800 w-screen h-1/5  text-slate-300 relative bottom-0 left-0 right-0 ">
            <div className=" w-full flex justify-between items-center px-28 py-3 max-[640px]:pl-0 pr-3 ">
                <ul className="flex flex-col text-sm max-[768px]:mx-8 max-[768px]:text-xs  max-[400px]:hidden">
                  <li className="my-1  ">  <NavLink to="/"><span className="border-b-2 rounded-md px-1 border-slate-300 hover:text-slate-400 hover:border-slate-500">Home</span></NavLink></li>
                 <li className="my-1">   <NavLink to="/ProductList"><span className="border-b-2 rounded-md px-1 border-slate-300 hover:text-slate-400 hover:border-slate-500">ProductList</span></NavLink></li>
               <li className="my-1 ">     <NavLink to="/About"><span className="border-b-2 rounded-md px-1 border-slate-300 hover:text-slate-400 hover:border-slate-500">About</span></NavLink></li>
                </ul>
                <ul className="flex flex-col text-sm max-[768px]:mx-8 max-[768px]:text-xs">
                  <li className="my-1 ">  <NavLink to="https://github.com/parisasetvati"><span className="flex flex-row items-center border-b-2 rounded-md px-1 border-slate-300 hover:text-slate-400 hover:border-slate-500"><FaGithub className="mr-3"/>Github</span></NavLink></li>
                 <li className="my-1">   <NavLink to="/"><span className="flex flex-row items-center border-b-2 rounded-md px-1 border-slate-300 hover:text-slate-400 hover:border-slate-500"><FaWhatsapp className="mr-3 "/>Whatsapp</span></NavLink></li>
               <li className="my-1">     <NavLink to="/"><span className="flex flex-row items-center border-b-2 rounded-md px-1 border-slate-300 hover:text-slate-400 hover:border-slate-500"><FaLinkedin className="mr-3"/>Linkedin</span></NavLink></li>
                </ul>
                <div className="flex flex-col justify-center items-center text-sm max-[768px]:mx-8 max-[768px]:text-xs max-[400px]:items-start">

                
            <span className="text-slate-300 font-bold pb-3  flex justify-center items-center">producer: </span> 
            <span className="text-slate-300 font-bold pb-3 flex justify-center items-center">Parisa Setvati Ragheb</span>
            <span className="text-slate-300 font-bold flex justify-center items-center">09037674509</span>
            </div>
            </div>
           
        </footer>
     );
}
 
export default Footer;