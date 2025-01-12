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
      "img":"/Images/dummyUser.png",
      "name":"Dotnik Studio Pvt Ltd",
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
      <div style={{marginBottom:'12px'}} className='flex'>
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
                     ContentFlux has been an incredible partner for our content needs. They really took the time to understand our brand and what we wanted to communicate. The content they delivered wasn’t just well-written but also felt aligned with our voice and goals. It’s been refreshing to work with a team that’s so dedicated and detail-oriented. We’re excited to continue working with them..
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