import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import {AiFillClockCircle, AiOutlineTwitter, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';
import { MdEmail, MdCall } from "react-icons/md";
import {BsFacebook} from 'react-icons/bs';
import './style.css';

function Footer(){
   return(
      <footer>
         <div className='footer-section'>
            <div>
               <img src="/Images/logo1.png"  width="220px" height="80px" alt='footer' />
               <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nullam in nibh vehicula.</p>
            </div>
            <div>
               <h2>Get In Touch</h2>
               <ul className='list'>
                  <li><a href=""><span className='fSize'><IoLocationSharp/></span><span>918 Abner Road, Hudson</span></a></li>
                  <li><a href="mailto:example@mail.com"><span className='fSize'><MdEmail/></span><span>example@mail.com</span></a></li>
                  <li><a href="tel:+1 234 567 890"><span className='fSize'><MdCall/></span><span>+1 234 567 890</span></a></li>
                  <li><a href=""><span className='fSize'><AiFillClockCircle/></span><span>07.00 AM - 19.00 PM</span></a></li>
               </ul>
            </div>
            <div>
               <h2>Quicklinks</h2>
               <ul className='pageList'>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">About</a></li>
                  <li><a href="/">FAQs</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">Contact</a></li>
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
               Copyright © 2021 ASK Project
            </div>
            <div className='social-icon'>
               <div>Follow Us</div>
               <div style={{fontSize:'1.1rem'}}><BsFacebook/></div>
               <div><AiOutlineTwitter/></div>
               <div><AiFillYoutube/></div>
               <div><AiFillLinkedin/></div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;