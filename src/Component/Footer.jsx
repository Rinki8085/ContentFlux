import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import {AiFillClockCircle, AiOutlineTwitter, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';
import { MdEmail, MdCall } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import {BsFacebook} from 'react-icons/bs';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Footer(){
   const navigate = useNavigate();

   const handleNavigation = () =>{
      navigate("/")
   }


   return(
      <footer>
         <div className='footer-section'>
            <div>
               <div style={{display:"flex", justifyContent:"center"}}>
               <div className='nav_logo' onClick={handleNavigation}>
                  <img src="/Images/footer.png"  width="50px" height="50px" alt='footer' />
                  <p>ContentFlux</p>
               </div>
               </div>
               
               
               <p style={{ marginBlockStart: "0.5em"}}>We focus to create the brand message should reach the target audience with the best clarity. Our content writing service makes sure we breathe life into the ideas.</p>
            </div>
            <div>
               <h2>Get In Touch</h2>
               <ul className='list'>
                  <li><a href=""><span className='fSize'><IoLocationSharp/></span><span>405, Shreeji Heights, Indore 452016</span></a></li>
                  <li><a href="mailto:example@mail.com"><span className='fSize'><MdEmail/></span><span>info@thecontentflux.com</span></a></li>
                  <li><a href="tel:+1 234 567 890"><span className='fSize'><MdCall/></span><span>+91 7509745109</span></a></li>
                  {/* <li><a href=""><span className='fSize'><AiFillClockCircle/></span><span>07.00 AM - 19.00 PM</span></a></li> */}
               </ul>
            </div>
            <div>
               <h2>Quicklinks</h2>
               <ul className='pageList'>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about-us">About</a></li>
                  <li><a href="/">FAQs</a></li>
                  <li><a href="/contact">Contact</a></li>
               </ul>
            </div>
            {/* <div>
               <h2>Newsletter</h2>
               <div className='submitt'>
                  <input type='text' name='newletter' id='emailId' placeholder='Email' />
                  <br/>
                  <div className='submission'>
                     <button>Submit</button>
                  </div>
               </div>
            </div> */}
         </div>
         <div className='bottom-section'>
            <div>
            Copyright © 2025 ContentFlux
            </div>
            <div className='social-icon'>
               <div>Follow Us</div>
               <div style={{fontSize:'1.1rem'}}><a href="https://www.facebook.com/ContentFlux
               " target="_blank"><BsFacebook/></a></div>
               <div><a href="https://x.com/ContentFlux_" target="_blank"><AiOutlineTwitter/></a></div>
               <div><a href="https://www.instagram.com/contentfluxlimited/" target='_blank'><FaInstagramSquare /></a></div>
               <div><a href="https://www.linkedin.com/company/contentflux/" target='_blank'><AiFillLinkedin/></a></div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;