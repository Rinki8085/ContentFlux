import { useState } from 'react';
import {MdEmail} from 'react-icons/md';
import axios from 'axios';
import './style.css';
import "../Pages/Homepage/MobileView.css";
import { Link, useNavigate } from 'react-router-dom';

function ContactForm(){
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
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[rgb(244, 250, 235)] p-10'>
         <div className='form-content'>
            <p className='text-xl sm:!text-2xl lg:!text-[1.7rem] !leading-8 !font-semibold'>Let's Connect</p>
            <p className='leading-10 py-3'>Stand out in a sea of AI-generated sameness</p>
            <p className='form-text'>We understand that behind every project lies a story waiting to be shared. Reach out to us, and let's embark on this storytelling adventure together.</p>
            {/* <p className='links'><span><IoLocationSharp/></span><span>405, Shreeji Heights, Indore 452016</span></p> */}
            <p className='links py-3'><span><MdEmail/></span><span><a href="mailto:info@thecontentflux.com">info@thecontentflux.com</a></span></p>
           <Link to='https://calendly.com/contentflux/30min' target='_blank'> <button className='animated-button highImpact !h-[50px] !shadow-md'>Free High-Impact Consultation</button></Link>
            {/* <p className='links'><span><FaPhoneAlt/></span><span><a href="#">+91 7509745109</a></span></p> */}
         </div>
         <div className="">
            {/* <form onSubmit={handleSubmit}> */}
            <div className="cta">
               <input type="text" placeholder="Name" value={name} onChange={(event)=>setName(event.target.value)} />
               <input type="email" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)} required />
               <input type="text" placeholder="Contact Number" value={phone} onChange={(event)=>setPhone(event.target.value)} />
               <textarea placeholder="Message" className='!w-full' value={message} onChange={(event)=>setMessage(event.target.value)}></textarea>
               <button className='sendButton' onClick={handleSubmit}>
                  {submit ? <img src="/Images/loader.webp" alt='load' style={{width:"20px", height:"20px"}} /> : "Submit"}
               </button>
               <p className='!pt-2'>We Hate Spam As Much As You Do 😁</p>
            </div>
            {/* </form> */}
         </div>
      </div>
   )
}

export default ContactForm;