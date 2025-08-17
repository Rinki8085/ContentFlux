import { useEffect, useRef } from "react";
import "./Homepage.css";
import SwiperSlider from "./SwiperSlider";

const Testimonial=()=>{
   const ref = useRef(null);

   useEffect(()=>{
      console.log(ref.current.className)
   },[])

   return(
      <div className="client_testimonial !grid-cols-1 sm:!grid-cols-2">
         <div className="client_overview flex flex-col !items-center sm:!items-start">
            <p className="!text-[#312e5f] !text-lg sm:!text-2xl lg:!text-3xl font-semibold">Our Prominent Clients</p>
            <p className="!text-center sm:!text-left">We put our best efforts to make our clients' brands voice reach their audiences with the right words at right channels to inspire action.</p>
         </div>
         <div className="client_testimonal !mx-auto">
            <div className="slide_show" ref={ref}>
               <SwiperSlider />
            </div>
         </div>
      </div>
   )
}

export default Testimonial;