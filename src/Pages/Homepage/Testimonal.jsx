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
            <h1>Our Prominent Clients</h1>
            <p>We put our best efforts to make our clients' brands voice reach their audiences with the right words at right channels to inspire action.</p>
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