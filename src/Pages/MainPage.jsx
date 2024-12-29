import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import ContactForm from '../Component/ContactForm';
import Footer from '../Component/Footer';

function MainPage (){
   const pathName = useParams();

   useEffect(()=>{
      console.log(pathName)
   },[])

   return (
<>
      <Navbar/>
      {/* <AllRoutes/> */}
      <Outlet />
      <ContactForm />
      <Footer />
    </>
   )
}

export default MainPage;