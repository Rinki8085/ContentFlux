import React from "react"; 
import "./Services.css";

function Services({text, para, children}){
   return(
      <div>
         <div className="services-main">
            <div className="article-content">
               <h2>{text}</h2>
               <p>{para}</p>
               <div>
                  <button>Talk to specialist</button>
                  <button>Download Samples</button>
               </div>
            </div>
            <div className="">
               <div className="cta">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Contact Number" />
                  <textarea placeholder="Message"></textarea>
                  <p>We Hate Spam As Much As You Do 😁</p>
               </div>
            </div>
         </div>
         {children}
      </div>
   )
}

export default Services;