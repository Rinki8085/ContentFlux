import React, { useEffect } from "react";  
import Services from "./Services";
import "./ArticleWriter.css";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Copywriter = () =>{

   const navigate = useNavigate();
   
   const handleNavigation = () => {
      window.open("https://calendly.com/contentflux/30min", "_blank");
      // navigate("https://calendly.com/contentflux/30min?month=2025-03", { replace: true });
   }

      const handleClick = () => {
         navigate("/contact");
      }
   
      useEffect(() => {
         window.scrollTo(0, 0);
       }, []);

   useEffect(()=>{
      document.title = 'Professional Copywriting Services | Captivating Content That Converts'
   },[])

   return(
      <>
         <Helmet>
            <title>Professional Copywriting Services | Captivating Content That Converts</title>
            <meta 
               name="description" 
               content="Boost your brand with our expert copywriting services. We craft compelling, persuasive content that engages your audience and drives conversions." 
            />
            <link rel="canonical" href="https://thecontentflux.com/copywriting-services" />
         </Helmet>
         <Services text={"Copy Writer"}>
            <div className="article-writer">
               <div>
                  <div>
                     <h3>High-Quality Content</h3>
                     <img src="/Images/service_page/service_icon1.jpg" alt="service_icon1" />
                  </div>
                  <p>We believe that quality always trumps quantity when it comes to any form of content. Our creative writers are dedicated to crafting content that exceeds your expectations, and we’ll make revisions until you’re completely satisfied. You can trust us to take care of the quality, so you can focus on your business.</p>
               </div>
               <div>
                  <div>
                     <h3>Support 24/7</h3>
                     <img src="/Images/service_page/service_icon2.jpg" alt="service_icon1" />
                  </div>
                  <p>We believe that quality always trumps quantity when it comes to any form of content. Our creative writers are dedicated to crafting content that exceeds your expectations, and we’ll make revisions until you’re completely satisfied. You can trust us to take care of the quality, so you can focus on your business.</p>
               </div>
               <div>
                  <div>
                     <h3>Tight Deadlines</h3>
                     <img src="/Images/service_page/service_icon3.jpg" alt="service_icon1" />
                  </div>
                  <p>We believe that quality always trumps quantity when it comes to any form of content. Our creative writers are dedicated to crafting content that exceeds your expectations, and we’ll make revisions until you’re completely satisfied. You can trust us to take care of the quality, so you can focus on your business.</p>
               </div>
            </div>
            {/* who we are */}
            <div className="article-box1">
               <div>
                  <img src="/Images/service_page/Copywriting1.png" alt="" />
               </div>
               <div className="who_we">
                  <h3>Who we are</h3>
                  <p>Find out why our customers love us more than any other Branding Content Service Provider.</p>
                  <div>
                     <p>Digiorbits Services strives to provide businesses and professionals with top-notch, unique, and error-free content in order to aid them in achieving success and creating a notable online presence. Not only do we specialize in content creation, but we also execute extensive market research and analysis to deliver our customers complete content solutions.</p>
                     <p>Our knowledgeable SEO experts are well-versed in various digital marketing tactics and are able to offer organic search engine optimization services to ensure that your website remains at the forefront of SERPs (Search Engine Results Pages), allowing you to maximize your returns. Quality is essential for us here at Digiorbits Services; hence, it is our mission to provide only the finest quality of content at competitive prices. Try us out today!</p>
                     <button onClick={handleNavigation}>Get Free Consultation</button>
                  </div>
               </div>
            </div>
            {/* content done */}
            <div className="article-box2">
               <h3>Get Your Content Done with Digiorbits</h3>
               <p>Whether you’re a individual, little business or a large corporation, we provide a comprehensive range of services to meet your needs. We provide 100% plagiarism passed content.</p>
               <center><button onClick={handleClick}>Try Our Service</button></center>
               <div className="service-types">
                  <div>
                     <img src="/Images/service_page/writing_icon1.jpg" alt="writing1" />
                     <h3>Article Writing Services</h3>
                     <p>Article writing is the art and science of writing persuasive, engaging, and SEO-friendly content that drives customers to take action</p>
                  </div>
                  <div>
                     <img src="/Images/service_page/writing_icon2.jpg" alt="writing2" />
                     <h3>SEO Blog Writing Services</h3>
                     <p>Are you looking for the most affordable, appealing, and professional blog writing services? Allow our content writers to compose your blog for you!</p>
                  </div>
                  <div>
                     <img src="/Images/service_page/writing_icon3.jpg" alt="writing3" />
                     <h3>Website Content Writing Services</h3>
                     <p>Website content refers to the written words and phrases used on webpages to inform, educate and guide visitors. It is usually a combination of short sentences, summaries, headlines, titles and descriptions that together create a comprehensive understanding of the website’s</p>
                  </div>
                  <div>
                     <img src="/Images/service_page/writing_icon4.jpg" alt="writing4" />
                     <h3>SEO Content Writing Services</h3>
                     <p>SEO writing is the process of creating content that is optimized to rank higher in search engines, this resulting in more visibility and traffic.</p>
                  </div>
                  <div>
                     <img src="/Images/service_page/writing_icon5.jpg" alt="writing5" />
                     <h3>Technical Writing Services</h3>
                     <p>
                     If you're concerned about the material's technicality, simply hand it over to us and watch the magic unfold.
                     </p>
                  </div>
                  <div>
                     <img src="/Images/service_page/writing_icon6.jpg" alt="writing6" />
                     <h3>Product Description</h3>
                     <p>The core of your
                     E-commerce strategies is Product Pages. We write product descriptions that are comprehensive, appealing, and SEO-friendly</p>
                  </div>
               </div>
            </div>
            {/* helping brands */}
            <div className="article-box3">
               <div>
                  <img src="/Images/service_page/Copywriting2.png" width='100%' alt="" />
               </div>
               <div className="help-brands">
                  <h3>We Help Your Brands Meet Your Targets</h3>
                  <p>We understand how challenging it can be to start and manage a business, so we strive to provide assistance with content creation and publication that is tailored to fit your business plan.</p>
                  <div>
                     <img src="/Images/service_page/brand_icon1.png" alt="brand_icon" width="50px" height="50px" />
                     <div>
                        <h3>Make a Brand Voice</h3>
                        <p>Having a strong brand voice is essential when hiring a professional content service provider. Here at DigiOrbits, our experienced content writers understand different business perspectives, enabling us to help you experience your digital brand in a new way. With our expert team of professionals, your brand comes to life with clarity and authenticity. Let us take your business to the next level by empowering your unique message and making it heard.</p>
                     </div>
                  </div>
                  <div>
                     <img src="/Images/service_page/brand_icon2.png" alt="brand_icon" width="50px" height="50px" />
                     <div>
                        <h3>Dedicated Content Writer</h3>
                        <p>We write various types of web content, from creative articles to SEO content writing, as per your requirement. Our professionals have great knowledge of making a solid online presence and writing an article according to the reader's choice and taste</p>
                     </div>
                  </div>
               </div>
               
            </div>
         </Services>
      </>
   )
}

export default Copywriter;