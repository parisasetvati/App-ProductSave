import { NavLink } from "react-router-dom";
import { FaGithub,FaWhatsapp,FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return ( 
        <footer className="
        bg-slate-800 w-full h-full text-slate-300 ">
            <div className="flex justify-between items-center px-28 py-8 ">
                <ul className="flex flex-col text-lg ">
                  <li className="my-2  border-b-2 rounded-md border-slate-300 hover:text-slate-900 hover: border-slate-900">  <NavLink to="/"><span>Home</span></NavLink></li>
                 <li className="my-2 ">   <NavLink to="/ProductList"><span>ProductList</span></NavLink></li>
               <li className="my-2 ">     <NavLink to="/About"><span>About</span></NavLink></li>
                </ul>
                <ul className="flex flex-col text-lg">
                  <li className="my-2 ">  <NavLink to="https://github.com/parisasetvati"><span className="flex flex-row items-center"><FaGithub className="mr-3"/>Github</span></NavLink></li>
                 <li className="my-2 ">   <NavLink to="/"><span className="flex flex-row items-center"><FaWhatsapp className="mr-3"/>Whatsapp</span></NavLink></li>
               <li className="my-2 ">     <NavLink to="/"><span className="flex flex-row items-center"><FaLinkedin className="mr-3"/>Linkedin</span></NavLink></li>
                </ul>
                <div className="flex flex-col justify-center items-center text-sm">

                
            <span className="text-slate-300 font-bold pb-3 ">Design By Parisa Setvati</span>
            <span className="text-slate-300 font-bold">09037674509</span>
            </div>
            </div>
           
        </footer>
     );
}
 
export default Footer;