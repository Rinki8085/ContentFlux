import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Contact(){
   
   useEffect(()=>{},[
      document.title = 'Contact Us | Get in Touch for Professional Content Writing Services'
   ])

   return(
      <div>
         <Helmet>
            <meta
               name="description"
               content="Have questions or need professional content writing services? Contact us today to discuss your requirements. We're here to help!"
            />
         </Helmet>
         {/* Contact */}
      </div>
   )
}

export default Contact;