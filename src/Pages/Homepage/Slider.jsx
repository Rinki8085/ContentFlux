import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";
import 'swiper/css';
import "swiper/css/autoplay";
import "./Homepage.css";

const delay = 2500;

function Slider({testimonial_data}){
   const [index, setIndex] = React.useState(0);
   const timeoutRef = React.useRef(null);

   function resetTimeout() {
     if (timeoutRef.current) {
       clearTimeout(timeoutRef.current);
     }
   }
 
   React.useEffect(() => {
     resetTimeout();
     timeoutRef.current = setTimeout(
       () =>
         setIndex((prevIndex) =>
           prevIndex === testimonial_data.length - 1 ? 0 : prevIndex + 1
         ),
       delay
     );
 
     return () => {
       resetTimeout();
     };
   }, [index, testimonial_data.length]);

   return(
      <div className='testimonial'>
         <div className="slideshow">
            <Swiper
            spaceBetween={10}
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
                  <div className='slide'>
                     <div className='slide_text'>
                        {item.para}
                     </div>
                     <div className='slide_details'>
                        <div>
                           <div className='slider_image'>
                              <img src={item.img} alt="testimonal_logo" width='75px' height='75px' />
                           </div>
                           <div style={{lineHeight:"14px"}}>
                              <p><b>{item.name}</b></p>
                              <p>Client</p>
                           </div>
                        </div>
                        <div style={{fontSize:"35px"}}>
                           99
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            )}
            </Swiper>
         </div>
      </div>
   )
}

export default Slider;