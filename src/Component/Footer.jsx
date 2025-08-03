import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import {AiFillClockCircle, AiOutlineTwitter, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';
import { MdEmail, MdCall } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import {BsFacebook} from 'react-icons/bs';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

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
                  {/* <li><Link to=""><span className='fSize'><IoLocationSharp/></span><span>405, Shreeji Heights, Indore 452016</span></Link></li> */}
                  <li><Link to="mailto:example@mail.com"><span className='fSize'><MdEmail/></span><span>info@thecontentflux.com</span></Link></li>
                  <Link to='https://calendly.com/contentflux/30min' target='_blank'><button className='freeImpact'>Free High-Impact Consultation</button></Link>
                  {/* <li><Link to=""><span className='fSize'><LinkiFillClockCircle/></span><span>07.00 AM - 19.00 PM</span></Link></li> */}
               </ul>
            </div>
            <div>
               <h2>Quicklinks</h2>
               <ul className='pageList'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About</Link></li>
                  <li><Link to="/">FAQs</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
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
               <div style={{fontSize:'1.1rem'}}><Link to="https://www.facebook.com/ContentFlux
               " target="_blank"><BsFacebook/></Link></div>
               <div><Link to="https://x.com/ContentFlux_" target="_blank"><AiOutlineTwitter/></Link></div>
               <div><Link to="https://www.instagram.com/contentfluxlimited/" target='_blank'><FaInstagramSquare /></Link></div>
               <div><Link to="https://www.linkedin.com/company/contentflux/" target='_blank'><AiFillLinkedin/></Link></div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;