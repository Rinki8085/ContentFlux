import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function Contact(){
   const navigate = useNavigate();
   
      const handleClick = () => {
         navigate("/contact");
      }
   
      useEffect(() => {
         window.scrollTo(0, 0);
       }, []);
   useEffect(()=>{},[
      document.title = 'Contact Us | Get in Touch for Professional Content Writing Services'
   ])

   return(
      <>
         <Helmet>
            <title>Contact Us | Get in Touch for Professional Content Writing Services</title>
            <meta
               name="description"
               content="Have questions or need professional content writing services? Contact us today to discuss your requirements. We're here to help!"
            />
            <link rel="canonical" href="https://thecontentflux.com/contact" />
         </Helmet>
         {/* Contact */}
      </>
   )
}

export default Contact;