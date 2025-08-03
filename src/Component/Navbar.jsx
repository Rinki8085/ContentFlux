import React, { useState, useEffect } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { VscChromeClose } from "react-icons/vsc";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
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
      sublink:"/website-content-writing-services",
      name:"Web Content Writer"
   },
   {
      id:6,
      sublink:"/copywriting-services",
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
   {
      id:9,
      sublink:"/legal-content-writing",
      name: "Legal content Writer"
   },
   // {
   //    id:10,
   //    sublink:"/",
   //    name:"Resume Writer"
   // },
   {
      id:11,
      sublink:"/product-descriptions",
      name:"Product Description Writer"
   },
   // {
   //    id:12,
   //    sublink:"/",
   //    name:"Transcription Writer"
   // },
   {
      id:13,
      sublink:"/technical-content-writing",
      name:"Technical Writer"
   },
   {
      id:14,
      sublink:"/blogs",
      name:"Blogs"
   },
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
   const navigate = useNavigate();
   const [show, setShow] = useState(false);
   const [services, setServices] = useState(false);

   const handleNavigation = () =>{
      navigate("/")
   }

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
   
      <div className='navbar bg-[#F1EAFF]' id="nav">
         {/* <Slide direction='down'> */}
            <div className='navigation'>
               <div onClick={handleNavigation} className='nav_logo'> 
                  <img src='/Images/header_logo.png' alt='Logo' width='40px' height='40px' />
                  <p>ContentFlux</p>
               </div>
               <div className='navbar_tab'>
                  <Link to='/' onClick={handleClose}><div>Home</div></Link>
                  <Link to='/about-us' onClick={handleClose}><div>About</div></Link>
                  <Link to='/' className='services' ><div>Services</div>
                     <div className="services-list">
                        {link.map((item)=>
                           <Link to={`${item.sublink}`} key={item.name} onClick={handleClose}>{item.name}</Link>
                        )}
                     </div>
                  </Link>
                  {/* <Link to='/' onClick={handleClose}><div>Pages</div></Link> */}
                  <Link to='/contact' onClick={handleClose} style={{background:"#312e5f", color:"white"}}><div>Contact</div></Link>
               </div>
            </div>
         {/* </Slide> */}
         <div className='mobile-navbar'>
            <div>
               <div onClick={handleNavigation} className='nav_logo'> 
                  <img src='/Images/header_logo.png' alt='Logo' width='40px' height='40px' />
                  <p>ContentFlux</p>
               </div>
               <div className='menu' onClick={handleClick}>
                  <TfiMenu/>
               </div>
            </div>
            <div className='menu-tab' style={{display:show?'block':'none'}}>
               <div className='menu-link'>
                  <div className='close-tab' onClick={handleClose}>
                     <VscChromeClose />
                  </div>
                  <div><Link to='/' onClick={handleClose}>Home</Link></div>
                  <div><Link to='/about-us' onClick={handleClose}>About</Link></div>
                  <div onClick={()=>setServices((prev)=>!prev)}>
                     <Link to='/'><span>Services</span><span>{services?<IoIosArrowUp />:<IoIosArrowDown />}</span></Link>
                     {services && <div className='services-list-mobile'>
                        {link.map((item)=>
                           <Link to={`${item.sublink}`} key={item.name} onClick={handleClose}>{item.name}</Link>
                        )}
                     </div>}
                  </div>
                  {/* <div><Link to='/'>Pages</Link></div> */}
                  <div>
                     <Link to='/contact'>Contact</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )

}

export default Navbar;