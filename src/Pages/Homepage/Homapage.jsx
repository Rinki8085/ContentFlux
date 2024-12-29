import React from 'react';
import CompanyNiche from '../../Component/Company_Niche';
import InfinteScrollSlider from './InfiniteScroll';
import {FaLongArrowAltRight} from 'react-icons/fa';
import {MdPhoneEnabled} from 'react-icons/md';
import { GiCheckMark } from "react-icons/gi";
import Testimonial from './Testimonal'; 
import CountUp from "react-countup";
import Slider from './Slider';
import "./MobileView.css";
import "./Homepage.css";

let data = [
   {
      "id":"1",
      "heading":"Empathy Driven",
      "para":"We listen intently to understand your goals, aspirations, and challenges. Your story is ours to tell, and we do it with sincerity and empathy to deliver complete satisfaction.",
      "img":"/Images/Homepage/1.png"
   },
   {
      "id":"2",
      "heading":"Tailored Solutions",
      "para":"Every brand and business is unique, so we customize our approach and make sure that your brand content reflects your unique identity and connects with your targeted audience.",
      "img":"/Images/Homepage/2.png"
   },
   {
      "id":"3",
      "heading":"Quality Assurance",
      "para":"From captivating headlines to stimulating content, each sentence, paragraph, and word is precisely chosen, and refined to meet the highest quality standards.",
      "img":"/Images/Homepage/4.png"
   }
]

let grid_data = [
   {
      id:"1",
      img:"/Images/Homepage/Group_5.png",
      heading:"Website Content Writing",
      content:"From compelling homepage introductions to engaging product descriptions, we craft an online experience that leaves a lasting impression."
   },
   {
      id:"2",
      img:"/Images/Homepage/Group_6.png",
      heading:"Blogs Content Writing",
      content:"Embrace the power of storytelling through our blogs, where every post is an invitation to explore, learn, and engage."
   },
   {
      id:"3",
      img:"/Images/Homepage/Group_7.png",
      heading:"Legal Content Writing",
      content:"Legal content isn't just information; it's the embodiment of justice. Let our words present your legal prowess with clarity and authority."
   },
   {
      id:"4",
      img:"/Images/Homepage/Group_8.png",
      heading:"Copywriting",
      content:"Let your brand's story unfold through copy that not only communicates but captivates. In a world inundated with words, stand out with copy that compels, convinces, and converts."
   },
   {
      id:"5",
      img:"/Images/Homepage/Group_13.png",
      heading:"Technical Content Writing",
      content:"Your technology deserves a voice that speaks fluently to both experts and novices. Our technical content writing service makes the world of technology accessible and engaging for your audience."
   },
   {
      id:"6",
      img:"/Images/Homepage/Group_9.png",
      heading:"Social Media Writing",
      content:"Your brand deserves to be heard, shared, and celebrated. Social media is more than updates; it's a language, a connection. Let us be the storytellers who amplify your brand's personality."
   }
]

let writer_data = [
   {
      heading: 'Deliver the value to Customers',
      para: "Increasing the engagement with your potential customers and audience to position your brand as a valuable contributor in their lives."
   },
   {
      heading: 'Cost-Effective Than Ads',
      para: "Paid ads provide results as long as you have the budget; however, quality content remains for years and becomes a great business asset."
   },
   {
      heading: 'Gain More Credibility & Traffic',
      para: "When humans and search engines both like your brand content then automatically your business starts to gain credibility and quality traffic."
   }
]

function Homepage(){

   return(
      <div>
         <div className='Homepage'>
         {/* ------- Header ----- */}
            <div className='main_homepage_text'> 
                  <div className='main_head_text'>
                        <h1>Elevate Your Brand Vision with Premier Content Writing Services</h1>
                        <p>In the world of buzzing information, empower your brand with the art of storytelling that captivates, educates, and inspires.</p>

                        <div className='main_head_contact'>
                           <div>
                              <span>Get Started</span><span style={{paddingTop:"5px"}}><FaLongArrowAltRight/></span>
                           </div>
                           <div>
                              <a href='/contact'>
                              <span>Contact Us</span><span style={{paddingTop:"5px"}}><MdPhoneEnabled/></span>
                              </a>
                           </div>
                        </div>
                  </div>
                  <div>
                     <div className='main_image_section'>
                        <div className='rounded'>
                           <img src="/Images/Homepage/image6.avif" alt="logoImg" />
                        </div>
                        <div className='play-button'></div>
                        <div className='rounded left'>
                           <img src="/Images/image2.jpg" alt="logoImg" />
                        </div>
                     </div>
                     {/* <div>
                        <Slider testimonial_data={testimonial_data} />
                     </div> */}
                  </div>
            </div>
         </div>
         <div style={{marginTop:"4.5%"}}>
            <InfinteScrollSlider/>
         </div>
         {/* -------- About section ------ */}
         <div className='about_wrytr'>
            <div className='about_wrytr_text'>
               <div>
                  <p>Welcome to Inos Content- Where Words Transform Stories</p>
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
         {/* ------ business idea------ */}
         <div className='business_idea'>
            <div >Content Writing Service That Tells, Sells & Compels.</div>
            <div className='business_idea_grid'>
               {data.map((item)=>
               <div className='grid_box' key={item.id}>
                  <img src={item.img} alt="illustration" />
                  <p className='grid_box_heading'>{item.heading}</p>
                  <p>{item.para}</p>
                  <span className='read_more_btn'>
                     <span>Read More</span><span><FaLongArrowAltRight/></span>
                  </span>
               </div>
               )}
            </div>
            <div className='main_head_contact' style={{width:"220px",margin:"auto",padding:"35px 0px 45px 0px"}}>
               <div style={{backgroundColor:"white",color:"#1B4541"}}>
                  <span><a href='/contact' style={{textDecoration:'none', color:'#1B4541'}}>Get Started </a></span><span style={{paddingTop:"5px"}}><FaLongArrowAltRight/></span>
               </div>
            </div>
         </div>
         {/* ------ Strategy ------ */}
         <div className='stratgy'>
            <div className='stratgy_heading'>
               <div>Beyond Words: Empowering Your Vision, Mission & Values</div>
               <div>We understand that every idea carries a certain dream and vision and waiting for the medium to be unveiled. Our dedicated content-writing service ensures it makes the best impressions. We harness the art of storytelling to create and share compelling narratives.</div>
            </div>
            <div className='stratgy_boxes'>
               {grid_data.map((item)=>
                  <div key={item.id}>
                     <img src={item.img} height="80px" width="80px" alt='iconsImg' />
                     <h3>{item.heading}</h3>
                     <p>{item.content}</p>
                  </div>
               )}
            </div>
            <div className='stratgy_boxes'>
               {writer_data.map((item,i)=>
                  <div style={{padding:'0px',boxShadow:"none",background:'transparent'}} key={item}>
                  {/* <div className='check_mark'><GiCheckMark/></div> */}
                  <img src='/Images/Homepage/Group_1.png' height="80px" width="80px" alt='iconsImg' />
                  <h4>{item.heading}</h4>
                  <p>{item.para}</p>
                  <br/>
                  <span className='read_more_btn' style={{color:'#364541',justifyContent:"flex-start"}}>
                     <span>Read More</span><span><FaLongArrowAltRight/></span>
                  </span>
                  <br/>
                  <hr/>
               </div>
               )}
            </div>
         </div>
         {/* -------- Testimonial -------- */}
         <div className='testimonial_section'>
           <Testimonial />
         </div>
         {/* -------- react countup -------- */}
         <div className='counter_number'>
            <div><CountUp end={210} suffix="+" duration={3} style={{fontSize:"3rem"}}/>
               <p>Client Consultation</p>
            </div>
            <div><CountUp end={810} suffix="+" duration={3} style={{fontSize:"3rem"}}/>
               <p>Positive Reviews</p>
            </div>
            <div><CountUp end={575} suffix="+" duration={3} style={{fontSize:"3rem"}}/>
                  <p>Written Articles</p>
            </div>
            <div><CountUp end={1200} suffix="+" duration={3} style={{fontSize:"3rem"}}/>
                  <p>Working Hours</p>
            </div>
         </div>
         {/* -------- end ------- */}

         {/* -------- traffice visitors ------ */}
         <div className='traffic'>
            <div className='visitors'>
               <div>
                  <h1>We focus on Building Interest, Optimize & Make Sales With the best Words with best Clarity</h1>
                  <a href='/contact'><div className='main_head_contact' style={{justifyContent:'center'}}> 
                     <div style={{backgroundColor:"#312e5f",color:'white', marginBottom: '15px'}}>
                        <span>Contact US</span><span style={{paddingTop:"5px"}}><FaLongArrowAltRight/></span>
                     </div>
                  </div> </a>
               </div>
            </div>
         </div>
         {/* ------ ends tranffice ------ */}

         {/* ----- wryter ----- */}
         <div className='wryter_section'>
            <div>
               <h1>We make sure that the content we create is for the people, by the people to inspire the people.</h1>
               <p><strike>No AI or Bot generated Content</strike></p>
            </div>
            <div className='wryter-image'>
               <div><img src="../Images/dots3.png" alt="dotted" /></div>
               <div><img src="../Images/Homepage/image3.jpg" alt="women" /></div>
            </div>
         </div>
         {/* ------ wryter ends ------ */}
      </div>
   )
}

export default Homepage;