import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
import {FaStar} from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay";

let testimonial_data = [
   {
      "id":1,
      "img":"/Images/Testimonial_1.jpg",
      "name":"Londsay",
      "para":"Lorem ipsum dorm sit amet, consec tetiur adipiscing elit.",
      "rating":false
   },
   {
      "id":2,
      "img":"/Images/Testimonial_2.jpg",
      "name":"Rehonday",
      "para":"Lorem ipsum dorm sit amet, consec tetiur adipiscing elit.",
      "rating":false
   },
   {
      "id":3,
      "img":"/Images/Testimonial_3.jpg",
      "name":"Mehdnao",
      "para":"Lorem ipsum dorm sit amet, consec tetiur adipiscing elit.",
      "rating":false
   }
]

function StarRating(){
   return(
      <div style={{marginBottom:'12px'}}>
         {[1,2,3,4,5].map((item)=>
            <FaStar style={{fontSize:"1.2rem",color:"#FFC859",paddingRight:"5px"}} key={item} /> 
         )}
      </div>
   )
}

function SwiperSlider(){
   return (
      <div style={{width:"100%",height:"auto"}}>
         <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
               delay: 3500,
               pauseOnMouseEnter: true,
               disableOnInteraction: false
            }}
            loop={true}
            modules={[Autoplay]}
         >
            {testimonial_data.map((item)=>
               <SwiperSlide key={item.id}>
                  <div className='testimonial_slides'>
                     <StarRating />
                     <div className='slides_text'>
                     Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Etiam ullam corper risus nec porttitor rhoncus. Etiam dolor arcu, vulputate id lobortis a, fringilla vitae nisi. Pellentesque bibendum efficitur.
                     </div>
                     <div className='client_image'>
                        <div className='image'>
                           <div><img src={item.img} alt="client_image" /></div>
                           <div>{item.name}</div>
                        </div>
                        <div className='couma'>99</div>
                     </div>
                  </div>
               </SwiperSlide>
            )}
         </Swiper>
      </div>
   )
}

export default SwiperSlider;