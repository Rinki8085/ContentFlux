import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import "../Homepage/Homepage.css";
import "./About.css";

function About(){
   return(
      <div>
         <div class="banner-container">
            <div class="overlay">
               <h2>About Us</h2>
               <p style={{display:'flex', gap:'10px', alignItems:"center"}}>
                  <span>Home</span> 
                  <span><FaLongArrowAltRight /></span>
                  <span>About</span>
               </p>
            </div>
         </div>
         <div className='about_wrytr'>
            <div className='about_wrytr_text'>
               <div>
                  <p>About Content Flux</p>
                  <p>At Inos Content we believe the power of words, where we focus to create the brand message should reach the target audience with the best clarity. Our content writing service makes sure we breathe life into the ideas. Our seasoned expertise pen down content to create the interest among your audience, optimize them with better knowledge so that the brand can make sales.
                  Storytelling remains the heartbeat of connection to bring your narrative to life.
                  </p>
                  <div className='main_head_contact'>
                     <div>
                        <span><a href='/contact' style={{textDecoration:'none', color:'white'}}>Get Quote </a></span><span style={{paddingTop:"5px"}}><FaLongArrowAltRight/></span>
                        </div>
                  </div>
               </div>
            </div>
            <div>
               <div className='working_man'>
                  <div className='color position'></div>
                  <div className='img position'>
                     <img src="/Images/Homepage/image2.jpg" alt="workImg" />
                  </div>
                  <div className='dot_imgs position'>
                     <img src="/Images/dots3.png" alt="dotsImg" />
                  </div>
               </div>
            </div>
         </div>
         <div className='about-section'>
            <div style={{backgroundImage:"url(/Images/Homepage/image4.jpg)", height:'100%'}}></div>
            <div style={{backgroundColor:'#312e5f'}}></div>
            <div className='about-section1'>
               <p>"A writer is someone for whom writing is more difficult than it is for other people."</p>
               <p>- Thomas Mann, Essays of Three Decades</p>
            </div>
         </div>
      </div>
   )
}

export default About;