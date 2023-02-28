import react from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout/Layout';
import BookForm from './components/BookForm/BookForm';
import ProductEdit from './components/ProductEdit/ProductEdit';
import About from './components/About/About';


// import { ToastProvider, useToasts } from 'react-toast-notifications';

// const FormWithToasts = () => {
//   const { addToast } = useToasts();

//   const onSubmit = async value => {
//     const { error } = await dataPersistenceLayer(value);

//     if (error) {
//       addToast(error.message, { appearance: 'error' });
//     } else {
//       addToast('Saved Successfully', { appearance: 'success' });
//     }
//   };

//   return <form onSubmit={onSubmit}>...</form>;
// };

// const App = () => (
//   <ToastProvider>
//     <FormWithToasts />
//   </ToastProvider>
// );
const App=()=> {

  return (
    
    
  
        <>
         <Home/> 
     
     <ToastContainer />
        </> 
  
    
        

   
    
       
      
  );
}

export default App;
