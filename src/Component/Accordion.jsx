import { SlArrowDown } from "react-icons/sl";
import React, { useState } from 'react';
import "./style.css";

const Accordion = ({data}) => {
   const [show, setShow] = useState(0);
   const [view, setView] = useState(false);

   const handleClick = (index)=>{
      setShow(index);
      setView((prev)=>!prev)
   }

   return (
      <div className='accordion'>
         <h3 className="font-semibold text-lg pb-4">Frequently Asked Question</h3>
         {data.map((item, index) => 
         <div className='accor'>
            <div onClick={()=>handleClick(index)} className='!py-6'>
               <h4>{item.question}</h4>
               <SlArrowDown style={{fontWeight:'bold'}} />
            </div>
            {show === index && view && <div>
               <p>{item.answer}</p>
               {item.list.length>0 && <ul className="accor-list">
                  {item.list.map((list)=>
                     <li>{list}</li>
                  )}
               </ul>}
            </div>}
         </div>)}
      </div>
   )
}

export default Accordion;