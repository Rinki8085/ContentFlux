import React, { useState, useEffect } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { VscChromeClose } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';
import './style.css';
import './mobileStyling.css';

const link = [
   // {
   //    id:1,
   //    sublink:"/",
   //    name: "Article Writer",
   // },
   // {
   //    id:2,
   //    sublink:"/",
   //    name: "Blog Writer",
   // },
   // {
   //    id:3,
   //    sublink:"/",
   //    name: "Ebook Writer",
   // },
   // {
   //    id:4,
   //    sublink:"/",
   //    name: "Fiction Writer",
   // },
   {
      id:5,
      sublink:"/web-content-writer",
      name:"Web Content Writer"
   },
   {
      id:6,
      sublink:"/copywriter",
      name:"Copywriter"
   },
   // {
   //    id:7,
   //    sublink:"/",
   //    name:"Press Release Writer"
   // },
   // {
   //    id:8,
   //    sublink:"/",
   //    name:"Ghost Writer"
   // },
   // {
   //    id:9,
   //    sublink:"/",
   //    name: "Legal Writer"
   // },
   // {
   //    id:10,
   //    sublink:"/",
   //    name:"Resume Writer"
   // },
   {
      id:11,
      sublink:"/product-description-writer",
      name:"Product Description Writer"
   },
   // {
   //    id:12,
   //    sublink:"/",
   //    name:"Transcription Writer"
   // },
   {
      id:13,
      sublink:"/technical-writer",
      name:"Technical Writer"
   },
   // {
   //    id:14,
   //    sublink:"/",
   //    name:"Writing Translation"
   // },
   // {
   //    id:15,
   //    sublink:"/",
   //    name:"Editor"
   // },
   // {
   //    id:16,
   //    sublink:"/proofreader",
   //    name:"Proofreader"
   // }
]

function Navbar(){
   const [show, setShow] = useState(false);
   const [services, setServices] = useState(false);

   const handleClick = ()=>{
      setShow(true);
      document.body.classList.add('overflow')
   }

   const handleClose=()=>{
      setShow(false);
      document.body.classList.remove('overflow')
   }

   useEffect(()=>{
      let navbar = document.getElementById("nav");
      window.onscroll = function (event) {
         let scroll = window.pageYOffset;
         if(scroll>30){
            navbar.style.backgroundColor="#F1EAFF"
         }else{
            navbar.style.backgroundColor="transparent";
         }
      }
   },[])

   return(
   
      <div className='navbar' id="nav">
         {/* <Slide direction='down'> */}
            <div className='navigation'>
               <div>
                  <Link to='/'>
                  <img src='/Images/Homepage/icon3.png' alt='Logo' width='130px' height='40px' /></Link>
               </div>
               <div className='navbar_tab'>
                  <Link to='/' onClick={handleClose}><div>Home</div></Link>
                  <Link to='/about' onClick={handleClose}><div>About</div></Link>
                  <Link to='/' className='services' ><div>Services</div>
                     <div className="services-list">
                        {link.map((item)=>
                           <Link to={`${item.sublink}`} key={item.name} onClick={handleClose}>{item.name}</Link>
                        )}
                     </div>
                  </Link>
                  {/* <Link to='/' onClick={handleClose}><div>Pages</div></Link> */}
                  <Link to='/contact' onClick={handleClose}><div>Contact</div></Link>
               </div>
            </div>
         {/* </Slide> */}
         <div className='mobile-navbar'>
            <div>
                  <div><img src='https://askproject.net/wryter/wp-content/uploads/sites/36/2021/10/logo_Asset-2.png' alt='Logo' width='130px' height='33px' className='logo-img' /></div>
                  <div className='menu' onClick={handleClick}>
                     <TfiMenu/>
                  </div>
            </div>
            <div className='menu-tab' style={{display:show?'block':'none'}}>
                  <div className='menu-link'>
                        <div className='close-tab' onClick={handleClose}>
                           <VscChromeClose />
                        </div>
                        <div><Link to='/'>Home</Link></div>
                        <div><Link to='/about'>About</Link></div>
                        <div onClick={()=>setServices((prev)=>!prev)}>
                           <Link to='/'><span>Services</span><span>{services?<IoIosArrowUp />:<IoIosArrowDown />}</span></Link>
                           {services && <div className='services-list-mobile'>
                              {link.map((item)=>
                                 <Link to={`${item.sublink}`} key={item.name} onClick={handleClose}>{item.name}</Link>
                              )}
                           </div>}
                        </div>
                        {/* <div><Link to='/'>Pages</Link></div> */}
                        <div><Link to='/contact'>Contact</Link></div>
                  </div>
            </div>
         </div>
      </div>
   )

}

export default Navbar;