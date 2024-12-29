import React from 'react';
import {FaLongArrowAltRight} from 'react-icons/fa';
import { GiCheckMark } from "react-icons/gi";
import "../Pages/Homepage/Homepage.css";

let grid_data = [
   {
      id:"1",
      img:"/Images/icon_9_2.png",
      heading:"SEO Strategy",
      content:"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus."
   },
   {
      id:"2",
      img:"/Images/icon_7_2.png",
      heading:"Blog Articles",
      content:"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus."
   },
   {
      id:"3",
      img:"/Images/icon_8_2.png",
      heading:"Product Caption",
      content:"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus."
   },
   {
      id:"4",
      img:"/Images/icon_6_2.png",
      heading:"Creative Content",
      content:"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus."
   },
   {
      id:"5",
      img:"/Images/icon_4_2.png",
      heading:"Product Review",
      content:"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus."
   },
   {
      id:"6",
      img:"/Images/icon_5_2.png",
      heading:"Email Writing",
      content:"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus."
   }
]

function ServiceBox(){
   return(
      <>
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
            {['Add Conversion Rates','Reduce Bounce Rate','Drive More Traffic'].map((item,i)=>
               <div style={{padding:'0px',boxShadow:"none",background:'transparent'}} key={item}>
               <div className='check_mark'><GiCheckMark/></div>
               <h4>{item}</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
               <br/>
               <span className='read_more_btn' style={{color:'#364541',justifyContent:"flex-start"}}>
                  <span>Read More</span><span><FaLongArrowAltRight/></span>
               </span>
               <br/>
               <hr/>
            </div>
            )}
         </div>
      </>
   )
}

export default ServiceBox;