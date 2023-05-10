import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = ({children,productlist}) => {
    return (
        <section className="w-full ">
       
<Header totalItem={productlist.filter((p) => p.id > 0).length} /> 
{children}
<Footer/>
</section>
      );
}
 
export default Layout;