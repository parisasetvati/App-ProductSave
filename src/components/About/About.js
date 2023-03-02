import { NavLink } from "react-router-dom";

const About = () => {
    return (  
        <section className="text-slate-300 mx-auto mb-16 w-full mt-40">
            <div className="w-2/3 bg-slate-800 text-justify flex  flex-col justify-center mx-auto items-center mt-12 px-10 py-5 rounded-md">
            <h1 className="font-bold p-4">About Me & Project</h1>
                <p className="leading-8 pt-2">I am Parisa Setvati Ragheb, I have been working in front for about 3 years. This project is one of my works that was designed using Html & Framework Tailwind & React.js.</p>
                <p className="leading-8 pt-2">This is an application for storing warehouse products that has different features. In this part, we are going to explain about the project and how its code works for you.</p>
                <h1 className="font-bold p-4">Description By Project</h1>
                <p className="leading-8 pt-2">The 
                 <NavLink to="/"><span className="font-bold mx-1 px-1 border-slate-300 border-b-2 rounded-md hover:border-b-2 hover:border-slate-500 hover:text-slate-400">Home page</span> </NavLink>of the project has two forms, the first of which can be viewed by clicking on the<span className="font-bold px-1"> Add New Category</span> 
                 option, and through that form you can add the desired category of your product to the Add Product form.
The second form is for adding new products to the list of products.</p>
<p className="leading-8 pt-2 ">The second link is <NavLink to="/ProductList"><span className="font-bold px-1 mx-1 border-slate-300 border-b-2 rounded-md hover:border-b-2 hover:border-slate-500 hover:text-slate-400"> ProductList</span></NavLink>, by clicking on it you can see a list of added products.
On this page, there is the name of the product, number, category, date of creation of the package. It also has two buttons,
<NavLink to="/ProductList"><span className="font-bold mx-1 px-1 border-slate-300 border-b-2 rounded-md hover:border-b-2 hover:border-slate-500 hover:text-slate-400">Delete</span></NavLink> & 
<NavLink to="/ProductList"><span className="font-bold mx-1 px-1 border-slate-300 border-b-2 rounded-md hover:border-b-2 hover:border-slate-500 hover:text-slate-400">Edit</span></NavLink>
, which can be used to delete and edit the product by clicking on it.By holding the mouse over the Edit button, the time of the last edit of the product can be seen as a Tooltip.Product information is stored in LocalStorege and will be stored there for a long time.</p>

            </div>
            <div className='w-full flex justify-start items-center my-6 ml-56 max-[640px]:ml-4'>
            
            <NavLink to="/"><span className='text-slate-300 mb-5 font-bold border-b-2 px-2 py-1 rounded-md text-sm hover:border-slate-700 hover:text-slate-700 hover:bg-slate-300'>Back</span></NavLink>
             </div>
        </section>

    );
}
 
export default About;