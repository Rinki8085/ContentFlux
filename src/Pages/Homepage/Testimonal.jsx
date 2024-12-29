import React, { useEffect, useRef } from "react";
import {FaLongArrowAltRight} from 'react-icons/fa';
import "./Homepage.css";
import SwiperSlider from "./SwiperSlider";

const Testimonial=()=>{
   const ref = useRef(null);

   useEffect(()=>{
      console.log(ref.current.className)
   },[])

   return(
      <div className="client_testimonial">
         <div className="client_overview">
            <h1>Client Testimonial</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper risus nec porttitor rhoncus. Etiam dolor arcu.</p>
            
         </div>
         <div className="client_testimonal">
            <div className="slide_show" ref={ref}>
               <SwiperSlider />
            </div>
         </div>
      </div>
   )
}

export default Testimonial;