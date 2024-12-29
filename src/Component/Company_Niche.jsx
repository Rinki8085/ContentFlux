
import "../Pages/Homepage/Homepage.css";
import {FaLongArrowAltRight} from 'react-icons/fa';

let data = [
   {
      "id":"1",
      "heading":"Creative Agency",
      "para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      "img":"/Images/illustration_1.png"
   },
   {
      "id":"2",
      "heading":"Local Business",
      "para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      "img":"/Images/illustration_2.png"
   },
   {
      "id":"3",
      "heading":"Content Creator",
      "para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      "img":"/Images/illustration_3_2.png"
   }
]

function CompanyNiche(){
   return(
      <>
         <div className='business_idea'>
            <div >Copy that tells, sells & compels.</div>
            <div className='business_idea_grid'>
               {data.map((item)=>
               <div className='grid_box' key={item.id}>
                  <img src={item.img} alt="illustration" />
                  <p className='grid_box_heading'>{item.heading}</p>
                  <p>{item.para}</p>
                  <span className='read_more_btn'>
                     <span>Read More</span><span><FaLongArrowAltRight/></span>
                  </span>
               </div>
               )}
            </div>
            <div className='main_head_contact' style={{width:"220px",margin:"auto",padding:"35px 0px 45px 0px"}}>
               <div style={{backgroundColor:"white",color:"#1B4541"}}>
                  <span>Get Started</span><span style={{paddingTop:"5px"}}><FaLongArrowAltRight/></span>
               </div>
            </div>
         </div>
      </>
   )
}


export default CompanyNiche;