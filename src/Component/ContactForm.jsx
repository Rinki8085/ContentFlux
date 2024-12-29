import React, { useState } from 'react';
import {IoLocationSharp} from 'react-icons/io5';
import {MdEmail} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import axios from 'axios';
import './style.css';
import "../Pages/Homepage/MobileView.css";
import { useNavigate } from 'react-router-dom';

function ContactForm(){
   const navigate = useNavigate();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = async(event) =>{
      event.preventDefault();
      try {
         if(name!=='' && email!=='' && phone!=='' && message!==''){
            let data ={
               name, email, phone, message
            }
            console.log(data)
            axios.post("https://getform.io/f/azyyypzb", data,
            { headers: {'Accept': 'application/json'}})
            .then(response => {console.log(response);
               navigate("/thankyou")
            })
            .catch(error => console.log(error))
         }
      } catch (error) {
         console.log(error);
      }
   }

   return(
      <div className='contact-form'>
         <div className='form-content'>
            <h1>Let's Connect</h1>
            <p className='form-text'>We understand that behind every project lies a story waiting to be shared. Reach out to us, and let's embark on this storytelling adventure together.</p>
            <p className='links'><span><IoLocationSharp/></span><span>918 Abner Road, Hudson</span></p>
            <p className='links'><span><MdEmail/></span><span><a href="#">example@mail.com</a></span></p>
            <p className='links'><span><FaPhoneAlt/></span><span><a href="#">+1 234 567 890</a></span></p>
         </div>
         <div className="">
            {/* <form onSubmit={handleSubmit}> */}
            <div className="cta">
               <input type="text" placeholder="Name" value={name} onChange={(event)=>setName(event.target.value)} />
               <input type="text" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)} />
               <input type="text" placeholder="Contact Number" value={phone} onChange={(event)=>setPhone(event.target.value)} />
               <textarea placeholder="Message" value={message} onChange={(event)=>setMessage(event.target.value)}></textarea>
               <button className='sendButton' onClick={handleSubmit}>Submit</button>
               <p>We Hate Spam As Much As You Do 😁</p>
            </div>
            {/* </form> */}
         </div>
      </div>
   )
}

export default ContactForm;