import React, { useEffect } from 'react';
import "./thankPage.css";
import { Link, useNavigate } from 'react-router-dom';

function ThankPage () {
   const navigate = useNavigate();

   useEffect(()=>{
      setTimeout(()=>{
         navigate('/')
      },10000)
   },[])
 
   return (
      <div className='thank-box'>
         <div className='thank-heading'>
            <h2>You are all Set… Let's connect!</h2>
            <p>We believe that every conversation is an opportunity to create extraordinary. Whether you have a question, a brilliant idea, or just want to share a story, we're here to listen and engage. Reach out to us, and let's start a dialogue that's as unique as you are.
            </p>
            <button className='thank-button'>
               <Link to='/'>Go Back</Link>
            </button>
         </div>
      </div>
   )
}

export default ThankPage;