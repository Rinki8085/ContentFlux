import React, { useState } from "react"; 
import "./Services.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Services({text, para, children}){
   const navigate = useNavigate();
   const [submit, setSubmit] = useState();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = async(event) =>{
      event.preventDefault();
      setSubmit(true);
      try {
         if(name!=='' && email!=='' && message!==''){
            let data ={
               name, email, phone, message
            }
            console.log(data)
            axios.post("https://getform.io/f/azyyypzb", data,
            { headers: {'Accept': 'application/json'}})
            .then(response => {console.log(response);
               setSubmit(false);
               navigate("/thankyou")
            })
            .catch(error => console.log(error))
         }
      } catch (error) {
         console.log(error);
         setSubmit(false);
      }
   }

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
                  <input type="text" placeholder="Name" value={name} onChange={(event)=>setName(event.target.value)}  />
                  <input type="email" placeholder="Email"  value={email} onChange={(event)=>setEmail(event.target.value)} required/>
                  <input type="text" placeholder="Contact Number" value={phone} onChange={(event)=>setPhone(event.target.value)} />
                  <textarea placeholder="Message" value={message} onChange={(event)=>setMessage(event.target.value)}></textarea>
                  <button className='sendButton' onClick={handleSubmit}>
                  {submit ? <img src="/Images/loader.webp" style={{width:"20px", height:"20px"}} /> : "Submit"}
               </button>                  <p>We Hate Spam As Much As You Do 😁</p>
               </div>
            </div>
         </div>
         {children}
      </div>
   )
}

export default Services;